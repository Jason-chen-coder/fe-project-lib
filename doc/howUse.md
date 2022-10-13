# 单选题：

:::demo

```html
<template>
  <single-choice :value.sync="value" :options="options"
  :preview="preview" :title="title" :images="images"></single-choice>
</template>

<script>
  export default {
    data() {
      return {
        value:'A',
        preview:true,
        title:'12. 导致急性心肌梗死患者早期（24小时内）死亡的主要原因是?',
        options:[
          {label:'心律失常',value:'A'},
          {label:'心力衰竭',value:'B'},
          {label:'心愿性休克',value:'C'},
          {label:'心脏破裂',value:'D'}
        ],
        images:[
          {
          url:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          alt:'超声检查1',
        },
          {
          url:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          alt:'超声检查2',
        }
        ],
      }
    }
  }
</script>
:::

# 多选题：

:::demo

```html
<template>
  <multiple-choice :value.sync="value" :options="options" 
  :preview="preview" :title="title" :images="images"></multiple-choice>
</template>

<script>
  export default {
    data() {
      return {
        value:['A'],
        preview:true,
        title:'12. 导致急性心肌梗死患者早期（24小时内）死亡的主要原因是?',
        options:[
          {label:'心律失常',value:'A'},
          {label:'心力衰竭',value:'B'},
          {label:'心愿性休克',value:'C'},
          {label:'心脏破裂',value:'D'},
          {label:'肺栓塞',value:'E'}
        ] ,
        images:[
          {
          url:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          alt:'超声检查1',
        },
          {
          url:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          alt:'超声检查2',
        }
        ],
      }
    }
  }
</script>
::: 

# 判断题：

:::demo

```html
<template>
  <tf-question :value.sync="value" :title="title" 
  :preview="preview" :images="images"></tf-question>
</template>

<script>
  export default {
    data() {
      return {
        title:'12. 导致急性心肌梗死患者早期（24小时内）死亡的主要原因是肺栓塞？',
        value:'对',
        preview:true,
         images:[
          {
          url:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          alt:'超声检查1',
        },
          {
          url:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          alt:'超声检查2',
        }
        ],
      }
    }
  }
</script>
:::

# 填空題：

:::demo

```html
<template>
  <div>
    <fill-in-blank :value.sync="value" :title="title" :preview="preview" :images="images"></fill-in-blank>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value:[1,2,3],
        preview:true,
        title:'12. 导致急性心肌梗死患者早期（24小时内）死亡的主要原因有_____、_____、_____?',
        images:[
          {
          url:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          alt:'超声检查1',
        },
          {
          url:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          alt:'超声检查2',
        },
          {
          url:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          alt:'超声检查3',
        },
          {
          url:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          alt:'超声检查3',
        },
          {
          url:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          alt:'超声检查3',
        },
        ],
      }
    }
  }
</script>
:::

# 主观题：
<!-- https://www.wangeditor.com/v5/menu-config.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%8A%9F%E8%83%BD -->
:::demo

```html
<template>
  <div>
    <subjective-question :value="value" :title="title" :images="images" :preview="preview"></subjective-question>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value:'你好，欢迎使用',
         preview:true,
        images:[
          {
          url:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          alt:'超声检查1',
        },
          {
          url:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          alt:'超声检查2',
        },
          {
          url:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          alt:'超声检查3',
        },
          {
          url:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          alt:'超声检查3',
        },
          {
          url:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          alt:'超声检查3',
        },
        ],
        title:'12. 导致急性心肌梗死患者早期（24小时内）死亡的主要原因是',
      }
    }
  }
</script>
:::

