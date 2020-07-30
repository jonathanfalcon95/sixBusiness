import * as React from 'react';
import EditScreenInfo from '../components/EditScreenInfo';

import {
  Text, View,
  StyleSheet,
  BackHandler,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  Platform,
  SectionList,
  ImageBackground,
  ScrollView,
  RefreshControl,
  Image,
  Alert
} from 'react-native';
import { Button, ButtonGroup, Badge, ListItem, Card, Icon } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../constants/Colors';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const initialData=[{
  order: "AB12345",
  items: [
    {
      index: 0,
      name: "Heineken Botella 355 ml",
      quantity: "2",
      select: false,
      urlImage: "https://www.sixtogo.com.mx/media/catalog/product/cache/461cccc3bfae4798b265f6f5e78729af/1/4/141593.jpg"
    },
    {
      index: 0,
      name: "Tecate Original Lata 355 ml",
      quantity: "1",
      select: false,
      urlImage: "https://www.sixtogo.com.mx/media/catalog/product/cache/81e46aa0d7f1857eb57b3d253f126f4d/1/0/10._tecate_original_lata_355ml_1.jpg"
    },
    {
      index: 0,
      name: "Superior Caguamón 1.2 L con envase",
      quantity: "5",
      select: false,
      urlImage: "https://www.sixtogo.com.mx/media/catalog/product/cache/81e46aa0d7f1857eb57b3d253f126f4d/2/3/23._superior_1.2l.jpg"
    },
    {
      index: 0,
      name: "XX Lager Lata 355 ml",
      quantity: "3",
      select: false,
      urlImage: "https://www.sixtogo.com.mx/media/catalog/product/cache/81e46aa0d7f1857eb57b3d253f126f4d/1/3/139371.jpg"
    }
  ]
}]
const data = [
 
  {
    order: "AC12349",
    items: [
      {
        index: 1,
        name: "Pringles Original 124g",
        quantity: "2",
        select: false,
        urlImage: "https://www.sixtogo.com.mx/media/catalog/product/cache/81e46aa0d7f1857eb57b3d253f126f4d/1/8/18908.jpg"
      },
      {
        index: 1,
        name: "Tecate Original Lata 355 ml",
        quantity: "1",
        select: false,
        urlImage: "https://www.sixtogo.com.mx/media/catalog/product/cache/81e46aa0d7f1857eb57b3d253f126f4d/1/0/10._tecate_original_lata_355ml_1.jpg"
      },
      {
        index: 1,
        name: "Barra Choko Krispis 37g",
        quantity: "5",
        select: false,
        urlImage: "https://www.sixtogo.com.mx/media/catalog/product/cache/81e46aa0d7f1857eb57b3d253f126f4d/1/9/19106.jpg"
      }
    ]
  },
  {
    order: "AD12340",
    items: [
      {
        index: 2,
        name: "Coca Cola Light 600 ml",
        quantity: "2",
        select: false,
        urlImage: "https://www.sixtogo.com.mx/media/catalog/product/cache/81e46aa0d7f1857eb57b3d253f126f4d/1/2/120011_2.jpg"
      },
      {
        index: 2,
        name: "Doritos Nachos 155 g",
        quantity: "1",
        select: false,
        urlImage: "https://www.sixtogo.com.mx/media/catalog/product/cache/81e46aa0d7f1857eb57b3d253f126f4d/1/1/11472_1.jpg"
      },
      {
        index: 2,
        name: "Barra Choko Krispis 37g",
        quantity: "5",
        select: false,
        urlImage: "https://www.sixtogo.com.mx/media/catalog/product/cache/81e46aa0d7f1857eb57b3d253f126f4d/1/9/19106.jpg"
      }
    ]
  },
  {
    order: "AD12345",
    items: [
      {
        index: 3,
        name: "Coca Cola Light 600 ml",
        quantity: "2",
        select: false,
        urlImage: "https://www.sixtogo.com.mx/media/catalog/product/cache/81e46aa0d7f1857eb57b3d253f126f4d/1/2/120011_2.jpg"
      },
      
      {
        index: 3,
        name: "Barra Choko Krispis 37g",
        quantity: "5",
        select: false,
        urlImage: "https://www.sixtogo.com.mx/media/catalog/product/cache/81e46aa0d7f1857eb57b3d253f126f4d/1/9/19106.jpg"
      }
    ]
  }
];

type MyProps = {

}

type MyState = {
  order: any
  refreshing: boolean
}


export default class TabOne extends React.Component<MyProps, MyState>{
  
  state: MyState = {
    // optional second annotation for better type inference
    order:  initialData ,
    refreshing: false
  };
  
  componentDidMount(){
    let count =1
   
    let auxOrder=this.state.order

    setTimeout(()=>{
    
      auxOrder.push(data[0])
      this.onRefresh();
     
    }, 4000);
    setTimeout(()=>{
     
      auxOrder.push(data[1])
      this.onRefresh();
     
    }, 8000);
 
  setTimeout(()=>{
    
    auxOrder.push(data[2])
    this.onRefresh();
   
  }, 16000);
}
  // updateIndexOrder(){
  //  let auxOrder=this.state.order
  //  for (let [index, item] of auxOrder.entries()) {
  //   for (let item2 of item.items) {
  //        auxOrder[index].items.index=index
  //  }
  // }
     
    
  // }
  renderFlatlist = ({ item, index }: any) => {
    return (
      <SafeAreaView style={styles.listContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={item}
          renderItem={this.renderList}
          keyExtractor={(item, index) => index.toString()}
          extraData={this.state}
        />
      </SafeAreaView>
    );
  };
  selectItems = (item: any, index: any) => {
    console.log(item)
    let auxOrder = this.state.order
    auxOrder[item.index].items[index].select = !item.select;
    this.setState({
      order: auxOrder
    })

  }
  renderList = ({ item, index }: any) => {
    //console.log(item);
    return (

      <ListItem
        onPress={() => this.selectItems(item, index)}

        leftElement={
          <TouchableOpacity>
            <View>
              <Image
                source={{ uri: item.urlImage }}
                style={{ paddingLeft: 30, width: 80, height: 80, borderRadius: 50 }}
              />
            </View>
          </TouchableOpacity>
        }
        title={
          <View style={styles.titleView}>

            <Text style={{ fontSize: 16, width: 165 }}>
              {item.name}
            </Text>

          </View>
        }
        subtitle={
          <View style={styles.subTitleView}>
            <View>
              <Text style={{ fontSize: 15, color: "red", width: 150 }} numberOfLines={2}>
                {"X" + item.quantity}
              </Text>
            </View>
          </View>
        }

        rightElement={
          <View>
            {item.select ?
              <MaterialCommunityIcons name="checkbox-marked-outline" size={40} color={"red"} /> :
              <MaterialCommunityIcons name="checkbox-blank-outline" size={40} color={colors.grey} />}
          </View>
        }
        containerStyle={{
          margin: 5,
          padding: 1,
          backgroundColor: "white",
          marginHorizontal: 15,
          borderRadius: 15
        }}
        Component={TouchableOpacity}
      />


    );
  };
  renderCardList = ({ item, index }: any) => {

    return (

      <Card
        title={"PEDIDO: #" + item.order}

        containerStyle={styles.cardContainer}
      >


        <View style={{
          ///width: SCREEN_WIDTH ,

          overflow: 'hidden',
        }}>
          <SafeAreaView style={styles.listContainer}>
            <FlatList
              data={item.items}
              renderItem={this.renderList}
              keyExtractor={(item, index) => index.toString()}
              extraData={this.state}
            />
            <Button
              title={"Tomar Pedido"}
              activeOpacity={1}
              variant="outline"
              underlayColor="transparent"
              buttonStyle={styles.buttonRoundedStyle}
              onPress={() => Alert.alert("Pedido Aceptado")}
              titleStyle={{ color: colors.white, fontSize: 18 }}

            />
          </SafeAreaView>


        </View>



      </Card>

    );
  };
  onRefresh = () => {
    this.setState({ refreshing: true, order:initialData  }, () => {
     // this.refs.flatListRef.scrollToOffset({x: -1, y: -1, animated: true})
     
      this.setState({ refreshing: false, });
    });
  };
  render() {

    return (

      <FlatList
       
       ref={ref => this.flatList = ref}
        showsVerticalScrollIndicator={false}
        data={this.state.order}
        style={{ marginTop: 0 }}
        renderItem={this.renderCardList}
        keyExtractor={(item, index) => index.toString()}
        extraData={this.state}
        onContentSizeChange={() => this.flatList.scrollToEnd({animated: true})}
        onLayout={() => this.flatList.scrollToEnd({animated: true})}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh}
          />
        }

      />

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  subTitleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listContainer: {
    flex: 1,

  },
  cardContainer: {
    padding: 2,
    paddingTop: 5,
    paddingBottom: 10,
    marginLeft: 2,
    marginRight: 2,
    marginBottom: 10,
    marginTop: 5,
    borderRadius: 10,
  },
  buttonRoundedStyle: {
    borderRadius: 30,
    borderWidth: 0,
    shadowColor: colors.black,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    backgroundColor: "red",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});
