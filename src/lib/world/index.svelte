<script lang="ts">
  import { beforeNavigate } from '$app/navigation'
  import { Tweened, tweened } from 'svelte/motion'

  import * as THREE from 'three'
  import * as SC from 'svelte-cubed'
  import * as W from '$lib/world'
  import { onMount } from 'svelte'
  import { get } from 'svelte/store'
  import { cubicInOut } from 'svelte/easing'

  const SPIN_SLOW = 0.001
  const SPIN_FAST = 0.02

  const SCALE_SMALL = 3
  const SCALE_LARGE = 5

  const POS_SMALL = -4
  const POS_LARGE = -3.5

  let tt: NodeJS.Timeout

  beforeNavigate(() => {
    spinrate.set(SPIN_FAST)

    if (tt) {
      clearTimeout(tt)
    }
    tt = setTimeout(() => { spinrate.set(SPIN_SLOW) }, 1000)
  })

  let object: THREE.Group
  let spin = 0.6

  let scale: Tweened<number>
  let pos: Tweened<number>

  function resize() {
    scale.set(window.innerWidth < 1500 ? SCALE_SMALL : SCALE_LARGE)
    pos.set(window.innerWidth < 1500 ? POS_SMALL : POS_LARGE)
  }

  onMount(async () => {
    // set up our size tweens
    scale = tweened(window.innerWidth < 1500 ? SCALE_SMALL : SCALE_LARGE)
    pos = tweened(window.innerWidth < 1500 ? POS_SMALL : POS_LARGE)

    // import the world object and wireframe it
    object = await W.load('/landmass.obj')
    W.wireframe(object, 0x0d47a1)

    // whenever our tweens change, update our object
    scale.subscribe(scale => object.scale.set(scale, scale, scale))
    pos.subscribe(pos => object.position.set(0, pos, 0))
  })


  let spinrate = tweened(SPIN_SLOW, {
    duration: 500,
    easing: cubicInOut,
  })

  SC.onFrame(() => {
    spin += get(spinrate)
  })

</script>

<svelte:window on:resize={resize} />

<SC.Canvas
  antialias
  background={new THREE.Color('white')}
  fog={new THREE.FogExp2('white', 0.065)}
>
  <SC.Primitive {object} rotation={[ 0, spin, 0 ]} />
  <SC.PerspectiveCamera position={[0, -10, -14]} fov={45} near={0.1} far={100} />
  <SC.AmbientLight intensity={0.9} />
  <SC.DirectionalLight intensity={0.8} position={[-2, 3, 2]} />
</SC.Canvas>

