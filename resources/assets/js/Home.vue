<template>
<div id="app">
    <div class="content-wrapper">
        <h1>hello</h1>
        <waterfall :line-gap="200" :watch='items'>
          <!-- each component is wrapped by a waterfall slot -->
          <waterfall-slot v-for="(item, index) in items" :width="item.width" :height="item.height" :order="index" :key="item.id">
            <!--
              <h1>{{item.name}}</h1>
            -->
          </waterfall-slot>
        </waterfall>
    </div>
</div>

</template>

<script>
import { Waterfall, WaterfallSlot } from 'vue-waterfall'

export default {
    components: {
        Waterfall,
        WaterfallSlot
    },
    replace: false
}

</script>
