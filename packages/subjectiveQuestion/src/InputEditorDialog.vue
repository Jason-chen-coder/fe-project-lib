<template>
  <el-dialog :visible.sync="dialogVisible"
             width="80%"
             :show-close="false"
             @open="dialogOpen">
    <Toolbar style="border-bottom: 1px solid #ccc"
             :editor="editor"
             :defaultConfig="toolbarConfig"
             :mode="mode" />
    <Editor style="height: 500px; overflow-y: hidden;"
            v-model="editorValue"
            :defaultConfig="editorConfig"
            :mode="mode"
            @onCreated="onCreated"
            @onChange="onChange" />
    <span slot="footer"
          class="dialog-footer">
      <el-button @click="handleClose(false)">取 消</el-button>
      <el-button type="primary"
                 @click="handleClose(true)">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

export default {
  components: { Editor, Toolbar },
  data() {
    return {
      editor: null,
      toolbarConfig: {},
      editorConfig: { placeholder: '请输入内容...' },
      mode: 'default', // or 'simple'
      editorValue: ''
    }
  },
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    },
    htmlValue: {
      type: String,
      value: '<p>hello</p>'
    }
  },
  methods: {
    dialogOpen() {
      this.editorValue = this.htmlValue
    },
    onChange(editor) {
      console.log('onChange', editor.getHtml())
    },
    onCreated(editor) {
      this.editor = Object.seal(editor) // 一定要用 Object.seal() ，否则会报错
    },
    handleClose(isConfirm) {
      this.$confirm('确认关闭？')
        .then(() => {
          if (isConfirm) {
            this.$emit('update:htmlValue', this.editor.getHtml())
          }
          this.$emit('update:dialogVisible', false)
        })
        .catch(() => {})
    }
  }
}
</script>
<style src="@wangeditor/editor/dist/css/style.css"></style>

<!-- <style lang="less">
@import url("@wangeditor/editor/dist/css/style.css");

</style> -->