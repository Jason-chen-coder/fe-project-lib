<template>
  <div class="multiple-choice">
    <div class="question-title">
      {{title}}
    </div>
    <div class="question-options">
      <el-checkbox-group v-model="checkboxValue"
                         :disabled="preview"
                         @change="radioChange">
        <el-checkbox v-for="item in options"
                     :key="item.label"
                     class="question-options-item"
                     :label="item.value">{{item.label}}</el-checkbox>
      </el-checkbox-group>
    </div>
    <div class="your-choice">
      <span style="color:#a3a3a3;">您的选项是:</span>
      <span style="color:#101010;margin-left:10px">{{value.join(',')}}</span>
    </div>
    <ImageArr :images="images"></ImageArr>

  </div>
</template>

<script>
import ImageArr from '../../components/ImageArr.vue'
export default {
  name: 'MultipleChoice',
  components: { ImageArr },
  props: {
    value: {
      type: Array,
      default: () => []
    },
    preview: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default: () => []
    },
    images: {
      type: Array,
      default: () => []
    }
  },
  mounted() {
    this.checkboxValue = this.value
  },
  data() {
    return {
      checkboxValue: []
    }
  },
  methods: {
    radioChange(e) {
      this.$emit('update:value', e)
    }
  }
}
</script>

<style scoped lang="less">
.multiple-choice {
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
    height: 24px;
    font-size: 16px;
    text-align: left;
    font-weight: bolder;
    font-family: SourceHanSansSC-regular;
  }
}
</style>