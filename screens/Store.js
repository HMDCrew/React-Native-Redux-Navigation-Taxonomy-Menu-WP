import { FlatList, SafeAreaView, Text, View } from 'react-native'
import React, { Component } from 'react'
import { Stack, ActivityIndicator } from "@react-native-material/core"
import axios from 'axios'

import env from '../constants/env'
import Header from '../components/Header'
import { styles, COLORS } from '../constants/style'
import ProductArchive from '../components/archive/Product'

export class Store extends Component {

  constructor(props) {
    super(props)
    this.state = {
      prod: [],
      numberposts: 5,
      page: 1,
      isLoaded: false
    }
  }

  componentDidMount() {
    this.setupComponent();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {

    const { params } = this.props.route;
    const oldParms = prevProps.route.params;

    if (params && oldParms && params.term.slug !== oldParms.term.slug) {
      this.setupComponent();
    }
  }


  async setupComponent() {

    this.setState({ isLoaded: false })

    const { params } = this.props.route;
    const { numberposts, page } = this.state;

    try {

      const request = {
        numberposts: numberposts,
        page: page,
        category: JSON.stringify(params.term)
      }

      let response = await axios.post(env.SITE_URL + "wp-json/wpr-get-products", request)
      let data = await response.data.message;

      this.setState({ prod: data, isLoaded: true })

    } catch (error) {
      console.log("Error", error);
    }
  }

  async loadMoreResults() {

    const { prod, numberposts, page } = this.state;
    const { params } = this.props.route;

    try {

      const request = {
        numberposts: numberposts,
        page: page + 1,
        category: JSON.stringify(params.term)
      }

      let response = await axios.post(env.SITE_URL + "wp-json/wpr-get-products", request)
      let data = await response.data;

      if ('error' !== data.status) {
        this.setState({ prod: [...prod, ...data.message] })
      }

      this.setState({ page: page + 1 })

    } catch (error) {
      console.log("Error", error);
    }
  }


  render() {

    const { prod, isLoaded, loadingMore } = this.state;

    return (
      <View style={styles.h_100}>
        <Header {...this.props} />
        <SafeAreaView style={[styles.h_100, { flex: 1 }]}>
          {
            (isLoaded ?

              <FlatList
                data={prod}
                ListFooterComponent={
                  <View>{loadingMore && <Text>Loading More...</Text>}</View>
                }
                scrollEventThrottle={250}
                onEndReached={() => this.loadMoreResults()}
                onEndReachedThreshold={0.01}
                keyExtractor={item => item.id}
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

export default Store
