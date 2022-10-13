<template>
  <div class="subjective-question">
    <div class="question-title">
      {{title}}<el-input class="cloze-input"
                :disabled="preview"
                @focus="onFocus"></el-input>
    </div>
    <div class="your-choice">
      <div style="color:#a3a3a3;margin-bottom:5px;">您的答案是:</div>
      <Editor @onCreated="onCreated"></Editor>
    </div>
    <ImageArr :images="images"></ImageArr>
    <InputEditorDialog :dialogVisible.sync="dialogVisible"
                       :htmlValue.sync="htmlValue"></InputEditorDialog>
  </div>
</template>
<script>
import { Editor } from '@wangeditor/editor-for-vue'
import InputEditorDialog from './InputEditorDialog.vue'
import ImageArr from '../../components/ImageArr.vue'
export default {
  name: 'SubjectiveQuestion',
  components: { Editor, InputEditorDialog, ImageArr },
  props: {
    value: {
      type: String,
      default: ''
    },
    preview: {
      type: Boolean,
      default: false
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
  data() {
    return {
      htmlValue: '',
      dialogVisible: false,
      editor: null
    }
  },
  mounted() {
    this.htmlValue = this.$props.value
  },
  watch: {
    htmlValue(newVal, oldVal) {
      if (newVal !== oldVal) this.editor?.setHtml(newVal)
    }
  },
  methods: {
    onCreated(editor) {
      this.editor = Object.seal(editor) // 一定要用 Object.seal() ，否则会报错
      this.editor.setHtml(this.htmlValue)
      this.editor.disable()
    },
    onFocus() {
      this.dialogVisible = true
    }
  }
}
</script>
<style src="@wangeditor/editor/dist/css/style.css"></style>

<style lang="less">
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
.subjective-question {
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
  .your-choice {
    font-size: 16px;
    text-align: left;
    font-weight: bolder;
    font-family: SourceHanSansSC-regular;
    .w-e-text-container {
      background-color: #f9f9f9;
    }
  }
}
</style>