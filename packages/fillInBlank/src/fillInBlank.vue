<script>
import ImageArr from '../../components/ImageArr.vue'
export default {
  name: 'FillInBlank',
  props: {
    preview: {
      type: Boolean,
      default: false
    },
    value: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: ''
    },
    images: {
      type: Array,
      default: () => []
    }
  },
  mounted() {
    console.log(this, '==========>mounted2')
  },
  functional: true,
  render(h, context) {
    const { props } = context
    const underlineList = props.title.match(/[_]{5,}/g)
    let title = props.title
    underlineList.map((underline, index) => {
      const titleStart = title.substring(0, title.indexOf(underline))
      const titleEnd = title.substring(
        title.indexOf(underline) + underline.length
      )
      let inputHtml = `<el-input class="cloze-input" :disabled="preview" v-model="inputValue[${index}]" @input="(e)=>valueInput(e,${index})"></el-input>`
      title = `${titleStart}${inputHtml}${titleEnd}`
    })
    let templateContainer = `
      <div class="fill-in-blank">
        <div class="question-title">
          ${title}
          </span> 
        </div>
        <div class="your-choice">
      <div style="color:#a3a3a3;margin-bottom:5px;">您的答案是:</div>
      <span style="color:#101010;margin-left:10px">{{value.join(',')}}</span>
    </div>
        <ImageArr :images="images"></ImageArr>
      </div>
      `
    const titleTemplate = {
      template: templateContainer,
      components: { ImageArr },
      data() {
        return { inputValue: [], ...props }
      },
      methods: {
        valueInput() {
          this.value = [...this.inputValue]
        }
      },
      mounted() {
        this.inputValue = [...this.value]
      }
    }
    return h(titleTemplate)
  }
}
</script>

<style  lang="less">
.cloze-input {
  &.el-input {
    width: auto;
  }
  .el-input__inner {
    height: 24px;
    border: none;
    border-radius: 0;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #dcdfe6;
  }
}
.fill-in-blank {
  padding: 20px;
  .question-title {
    text-align: left;
    height: 54px;
    line-height: 20px;
    border-radius: 5px;
    background-color: #fff8ea;
    color: #101010;
    font-size: 14px;
    font-family: Roboto;
    padding: 15px;
    box-sizing: border-box;
    font-weight: bolder;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .title-input {
      display: flex;
      align-items: center;
    }
  }
  .question-options {
    padding-left: 15px;

    .el-radio-group {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
    }
    &-item {
      width: 45%;
      text-align: left;
      margin-bottom: 25px;
    }
  }
}
</style>