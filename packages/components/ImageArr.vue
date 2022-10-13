<template>
  <div class="image-arr"
       v-if="images.length>0">
    <div style="color:#a3a3a3;">图片信息</div>
    <div class="image-arr-container">
      <div v-for="(item,index) in images"
           :key="index"
           class="img-item">
        <el-image style="width: 100%; height: 100%"
                  :src="item.url"
                  :preview-src-list="[item.url]">
        </el-image>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageArr',
  props: {
    images: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped lang="less">
.image-arr {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #f9f9f9;
  .image-arr-container {
    margin-top: 10px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    .img-item {
      width: 24%;
      padding: 10px 5px;
      height: 310px;
    }
  }
}
</style>