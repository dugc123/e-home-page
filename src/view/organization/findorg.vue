<template>
  <div id="map-wrap">
    <div id="container" ref="allmap"></div>
  </div>
</template>
 
<script>
export default {
  methods:{
    map(){
        const BMap = window.BMap
            const map = new BMap.Map('container')

            map.addControl(new BMap.NavigationControl({
            anchor: window.BMAP_ANCHOR_TOP_RIGHT        
                }));
            map.addControl(new BMap.MapTypeControl({
                anchor: window.BMAP_ANCHOR_TOP_LEFT        
                }));
            const Bpoint = new BMap.Point(116.404,39.915)
            const Zpoint = new BMap.Point(114.16,33.24)
            var Bmarker = new BMap.Marker(Bpoint)
            var Zmarker = new BMap.Marker(Zpoint)
            map.addOverlay(Bmarker);
            map.addOverlay(Zmarker);
            const Zoptsone = {
                position :Zpoint,
                offset : new BMap.Size(15,-50)
            }
            const Zoptstwo = {
                position :Zpoint,
                offset : new BMap.Size(15,-30)
            }
            const Boptsone = {
                position :Bpoint,
                offset : new BMap.Size(15,-30)
            }
            const labelone = new BMap.Label("信息工程学院学生党支部支部书记：杨鑫 电话：0396-2853187", Zoptsone);  // 创建文本标注对象
            labelone.setStyle({
          color : "red",
          fontSize : "0.24rem",
          height : "0.4rem",
          lineHeight : "0.4rem",
          fontFamily:"微软雅黑"
            });
            const labeltwo = new BMap.Label("信息工程学院学生流动党支部支部书记：高洋 电话：13526395586", Zoptstwo);  // 创建文本标注对象
            labeltwo.setStyle({
          color : "red",
          fontSize : "0.24rem",
          height : "0.4rem",
          lineHeight : "0.4rem",
          fontFamily:"微软雅黑"
            });
            const labelsthree = new BMap.Label("信息工程学院党总支 总支书记：柳晓阳 电话：0396-285032", Boptsone);  // 创建文本标注对象
            labelsthree.setStyle({
          color : "red",
          fontSize : "0.24rem",
          height : "0.4rem",
          lineHeight : "0.4rem",
          fontFamily:"微软雅黑"
            });
          map.addOverlay(labelone);   
          map.addOverlay(labeltwo);
          map.addOverlay(labelsthree);
          map.centerAndZoom(Zpoint, 5.5)
    }
 
  },
  mounted(){
    this.map()
 
  }
}
</script>
 
<style>
#map-wrap {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: .9rem;
}
#container{
  height: 95vh;
  overflow: hidden;
 
}
</style>
