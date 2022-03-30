import { Area } from '@antv/g2plot';

const data=[{"year":1984,"type ":"Barren Land","value":1694},{"year":1984,"type ":"Vegetation","value":1523},{"year":1984,"type ":"Water","value":185},{"year":1984,"type ":"Surface Minerals & Rock","value":321},{"year":1984,"type ":"Settlements","value":30},{"year":1984,"type ":"Other Unclassified Surfaces","value":69},{"year":1991,"type ":"Barren Land","value":1596},{"year":1991,"type ":"Vegetation","value":1566},{"year":1991,"type ":"Water","value":166},{"year":1991,"type ":"Surface Minerals & Rock","value":401},{"year":1991,"type ":"Settlements","value":40},{"year":1991,"type ":"Other Unclassified Surfaces","value":124},{"year":2001,"type ":"Barren Land","value":2109},{"year":2001,"type ":"Vegetation","value":1476},{"year":2001,"type ":"Water","value":86},{"year":2001,"type ":"Surface Minerals & Rock","value":130},{"year":2001,"type ":"Settlements","value":42},{"year":2001,"type ":"Other Unclassified Surfaces","value":79},{"year":2011,"type ":"Barren Land","value":2602},{"year":2011,"type ":"Vegetation","value":786},{"year":2011,"type ":"Water","value":47},{"year":2011,"type ":"Surface Minerals & Rock","value":51},{"year":2011,"type ":"Settlements","value":275},{"year":2011,"type ":"Other Unclassified Surfaces","value":163},{"year":2021,"type ":"Barren Land","value":3205},{"year":2021,"type ":"Vegetation","value":129},{"year":2021,"type ":"Water","value":52},{"year":2021,"type ":"Surface Minerals & Rock","value":205},{"year":2021,"type ":"Settlements","value":225},{"year":2021,"type ":"Other Unclassified Surfaces","value":9}]

const area = new Area('container', {
  data: data,
  xField: 'year',
  yField: 'value',
  seriesField: 'type ',
  color: ['#FFC100', '#2BCB95', '#247FEA',"#76523B","#791DC9","#626681"],
  areaStyle: {
    fillOpacity: 0.65,
  },
  appendPadding: 10,
  isPercent: true,
  isStack: true,
  legend:{
  flipPage:true,
  maxRow:3,
   marker:{
   style:{
     fillOpacity:1
   }
  }}, 
  yAxis: {
    label: {
      formatter: (value) => {
        return value *100 +"%";
      },
    },
  },
});
area.render();
