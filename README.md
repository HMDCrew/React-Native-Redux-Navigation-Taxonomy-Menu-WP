# React Native Setup Redux and Navigation using Products category in woocommerce

    git clone https://github.com/HMDCrew/React-Native-Redux-Navigation-Taxonomy-Menu-WP.git
    cd React-Native-Redux-Navigation-Taxonomy-Menu-WP
    npm i


## File "screen/Home.js":
  *This is a principal screen but contain only Header component and for content I'm insert only simple text.*
```js

...

import Header from '../components/Header';

...
    render() {
        return (
            ...
                <Header {...this.props} />
            ...
        )
    }

```

## File "components/Header.js":
*Is a principal component you can use it in all screens (i'm not use it on product screen for example). The principal function of this component is open a Drawer Menu component*
```js

    ...

    leading={props => (
        <IconButton
            icon={props => <Icon name="menu" {...props} />}
            onPress={() => navigation.openDrawer()}
            {...props}
        />
    )}

    ...

```

## File "navigation/DrawerNavigator.js":
*This component is used to build menu for navigation in a second moment we can replace the screens in component with API menu but in this file we can define the stack dependencies (ex: store screen to product screen) if we encapsulate this two screen in one stack React Native permite you return back from product screen to store screen*
```js

import Home from '../screens/Home'
import Stack from './Stack';

export class DrawerNavigator extends Component {
    render() {
        
        ...
        
        return (
            <Drawer.Navigator
                screenOptions={{
                    headerShown: false,
                    ...
                }}
                
                {/* SidebarContent Component is used to render items of Menu */}
                drawerContent={props => <SidebarContent {...props} /> }
            >

                <Drawer.Screen name="Home" component={Home} />

                {/* don't use stack on first position because the drawer by default loading component by it's positions */}
                <Drawer.Screen name="STACK" component={Stack} />

            </Drawer.Navigator>
        )
    }
}

```

## File "components/navigations/SidebarContent.js":
*this component is used to render taxonomy menu from Wordpress API*
```js

...

export class SidebarContent extends Component {

    ...

    // Redux calling API for populating menu and save it on device for next's use 
    componentDidMount() {
        this.props.getTaxonomys()
    }

    render() {

        const { navigation, menu } = this.props;

        return (
            <View>
                <SafeAreaView>
                    ...
                    
                    {/* This part enable defined screens in Drawer component */}
                    <DrawerContentScrollView {...this.props} >
                        <DrawerItemList {...this.props} />
                    </DrawerContentScrollView>
                    {/* end. this part missing in pushed code */}
                    
                    <View>
                        {
                            (!menu.isLoading ?
                                <FlatList
                                    // menu.taxonomy conatin api from redux store
                                    data={menu.taxonomy}
                                    keyExtractor={term => term.term_id}
                                    renderItem={term =>
                                        <Button
                                            key={term.item.term_id}
                                            title={<Text>{term.item.name}</Text>}

                                            onPress={() => 
                                                // this particular navigation permite you enter in Drawer named 'STACK' and it contain a Stack navigator
                                                // to have possibility return back to store screen
                                                // can you see the full code in this two file "navigation/DrawerNavigator.js" and "navigation/Stack.js"
                                                navigation.navigate('STACK', {
                                                    screen: 'Store',
                                                    params: { term: term.item },
                                                })
                                            }
                                            ...
                                        />
                                    }
                                />
                                : null)
                        }
                    </View>
                </SafeAreaView>
            </View>
        )
    }

    ...

```



## File "screens/Store.js":
**
```js

...

import ProductArchive from '../components/archive/Product'

export class Store extends Component {

    ...

    componentDidMount() {
        this.setupComponent();
    }

    // this function is used to refresh component if change category on menu
    componentDidUpdate(prevProps, prevState, snapshot) {

        const { params } = this.props.route;
        const oldParms = prevProps.route.params;

        // if taxonomy slug in old props is different from this props refresh the component 
        if (params && oldParms && params.term.slug !== oldParms.term.slug) {
            this.setupComponent();
        }
    }


    // is used to get products for selected taxonomy from api
    async setupComponent() {

        ...

        const request = {
            numberposts: numberposts,
            page: page,
            category: JSON.stringify(params.term)
        }

        let response = await axios.post(env.SITE_URL + "wp-json/wpr-get-products", request)
        let data = await response.data.message;

        this.setState({ prod: data, isLoaded: true })
        
        ...
    }

    // This function is used to get more products if arrive to end of page
    async loadMoreResults() {

        ...

        const request = {
            numberposts: numberposts,
            page: page + 1,
            category: JSON.stringify(params.term)
        }

        let response = await axios.post(env.SITE_URL + "wp-json/wpr-get-products", request)
        let data = await response.data;

        if ('error' !== data.status) {
            this.setState({ prod: [...prod, ...data.message] })
            this.setState({ page: page + 1 })
            
            // to improve this part can you add a boolean state to component for condition request
        }

        ...
    }


  render() {

    const { prod, isLoaded, loadingMore } = this.state;

    return (
      <View>
        <Header {...this.props} />
        <SafeAreaView>
          {
            (isLoaded ?

              <FlatList
                data={prod}
                ListFooterComponent={
                  <View>{loadingMore && <Text>Loading More...</Text>}</View>
                }
                
                // load more and tolerance scrolling
                scrollEventThrottle={250}
                onEndReached={() => this.loadMoreResults()}
                onEndReachedThreshold={0.01}

                keyExtractor={item => item.id}

                // ProductArchive is used to render every single product in Store Screen
                renderItem={product => <ProductArchive key={product.id} {...product} {...this.props} />}
              />
              :
              <Stack fill center>
                <ActivityIndicator size="large" color={COLORS.primary} />
              </Stack>
            )
          }
        </SafeAreaView>
      </View>
    )
  }
}

```


## File "components/archive/Product.js":
*this file is used for render every product in products list (in screen/Store.js)*
```js

...

export class ProductArchive extends Component {

    ...

    render() {

        ...

        return (
            
            {/* you can use directly 'Product' for navigation becouse this component is in already "STACK" screen */}
            <TouchableOpacity onPress={() => navigation.navigate('Product', { item })} >
                <View>
                    <Image source={{ uri: image_uri }} resizeMode='contain' />
                    <Text>{name}</Text>

                    ...

                </View>
            </TouchableOpacity>
        )
    }
}

```


## File "screens/Product.js":
*this screen is used ro render a Product page details. To improve this screen you can add a Loading state to contructor*
```js

...

export class Product extends Component {

    ...

    componentDidMount() {
        this.props.getProduct(this.props.route.params.item.id);
    }

    render() {

        ...

        return (
            <View>
                {
                    (!product.isLoading ?
                        <ScrollView>

                            <Text>{product.product.name}</Text>

                            {'' !== product.product.price ?
                                <Text>Price: {product.product.price}{product.product.symbol}</Text>
                                : null
                            }

                            {
                                product.product.gallery_image_ids.length ?
                                    product.product.gallery_image_ids.map((image, index) => <Image key={'img' + index} source={{ uri: image }} />)
                                    : null
                            }

                            {
                                '' !== product.product.description ?
                                    {/* this component is used to render html in react native (it's simple wrap content in html tag with react components) */}
                                    <RenderHtml
                                        ignoredDomTags={['iframe', 'script', 'style']}
                                        contentWidth={windowWidth}
                                        source={{ html: product.product.description }}
                                    />
                                    : null
                            }

                        </ScrollView>
                        : null)
                }
            </View>
        )
    }
}

...

```


### Note:

Other documentation:
[React Native Redux Prg.](https://github.com/HMDCrew/React-Native-Redux)
[Customn routes in plugin](https://github.com/HMDCrew/REST-API-WP-Woo)

# Reference:
*https://rossbulat.medium.com/react-native-lists-load-more-by-scrolling-378a1c5f56a6*