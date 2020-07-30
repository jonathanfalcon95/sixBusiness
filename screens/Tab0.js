import * as React from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import {
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
  Image
} from 'react-native';
import { Button, ButtonGroup, Badge, ListItem, Card, Icon } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../constants/Colors';
const data = [
  {
    order: "AB12345",
    items: [
      {
        name: "Heineken Botella 355 ml",
        quantity: "2",
        urlImage: "https://www.sixtogo.com.mx/media/catalog/product/cache/461cccc3bfae4798b265f6f5e78729af/1/4/141593.jpg"
      },
      {
        name: "Tecate Original Lata 355 ml",
        quantity: "1",
        urlImage: "https://www.sixtogo.com.mx/media/catalog/product/cache/81e46aa0d7f1857eb57b3d253f126f4d/1/0/10._tecate_original_lata_355ml_1.jpg"
      },
      {
        name: "Superior Caguamón 1.2 L con envase",
        quantity: "5",
        urlImage: "https://www.sixtogo.com.mx/media/catalog/product/cache/81e46aa0d7f1857eb57b3d253f126f4d/2/3/23._superior_1.2l.jpg"
      },
      {
        name: "XX Lager Lata 355 ml",
        quantity: "3",
        urlImage: "https://www.sixtogo.com.mx/media/catalog/product/cache/81e46aa0d7f1857eb57b3d253f126f4d/1/3/139371.jpg"
      }
    ]
  },
  {
    order: "AC12349",
    items: [
      {
        name: "Pringles Original 124g",
        quantity: "2",
        urlImage: "https://www.sixtogo.com.mx/media/catalog/product/cache/81e46aa0d7f1857eb57b3d253f126f4d/1/8/18908.jpg"
      },
      {
        name: "Tecate Original Lata 355 ml",
        quantity: "1",
        urlImage: "https://www.sixtogo.com.mx/media/catalog/product/cache/81e46aa0d7f1857eb57b3d253f126f4d/1/0/10._tecate_original_lata_355ml_1.jpg"
      },
      {
        name: "Barra Choko Krispis 37g",
        quantity: "5",
        urlImage: "https://www.sixtogo.com.mx/media/catalog/product/cache/81e46aa0d7f1857eb57b3d253f126f4d/1/9/19106.jpg"
      }
    ]
  },
  {
    order: "AD12340",
    items: [
      {
        name: "Coca Cola Light 600 ml",
        quantity: "2",
        urlImage: "https://www.sixtogo.com.mx/media/catalog/product/cache/81e46aa0d7f1857eb57b3d253f126f4d/1/2/120011_2.jpg"
      },
      {
        name: "Doritos Nachos 155 g",
        quantity: "1",
        urlImage: "https://www.sixtogo.com.mx/media/catalog/product/cache/81e46aa0d7f1857eb57b3d253f126f4d/1/1/11472_1.jpg"
      },
      {
        name: "Barra Choko Krispis 37g",
        quantity: "5",
        urlImage: "https://www.sixtogo.com.mx/media/catalog/product/cache/81e46aa0d7f1857eb57b3d253f126f4d/1/9/19106.jpg"
      }
    ]
  }
]



export default class TabOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: data,
    }
  }
  renderList = ({ item, index }) => {
    //console.log(item);
    return (
      <View>
        <ListItem
          // onPress={() => this.selectItems(item, index)}

          leftElement={
            <TouchableOpacity>
              <View>
                <Image
                  source={{ uri: item.photo_url }}
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
                <Text style={{ fontSize: 12, color: "black", width: 150 }} numberOfLines={2}>
                  {item.description}{' '}
                </Text>
                {/* <Text style={{ fontSize: 10, color: 'gray' }}>
              {item.address}{' '}
            </Text> */}
              </View>
            </View>
          }

          rightElement={
            <View>
              {item.select ?
                <MaterialCommunityIcons name="checkbox-marked-outline" size={40} color={colors.info} /> :
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

      </View>

    );
  };

  render() {
    const { order } = this.state
    return (
      <View style={styles.container} >
        <FlatList
          showsVerticalScrollIndicator={false}
          data={order[0].items}
          style={{ marginTop: 0 }}
          renderItem={this.renderList}
          keyExtractor={(item, index) => index.toString()}
          extraData={this.state}
        // refreshControl={
        //   <RefreshControl
        //     refreshing={refreshing}
        //     onRefresh={this.onRefresh}
        //   />
        // }
        />
      </View>
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
});
