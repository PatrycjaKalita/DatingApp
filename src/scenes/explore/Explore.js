import React from 'react'
import PropTypes from 'prop-types'
import {
  Image, View,
} from 'react-native'
import CardStack, { Card } from 'react-native-card-stack-swiper'
import MatchCard from '../../components/item/MatchCard'
import Demo from '../../../assets/data/demo'
import { images } from '../../theme'

// Styles for this screen
import styles from './Style'

// First screen after log in by user
// User can add to fav other user or reject
class Explore extends React.Component {
  constructor(props) {
    super(props)

    this.state = ({
      // eslint-disable-next-line react/no-unused-state
      items: [],
    })
  }

  render() {
    return (
      <View>
        <View style={styles.topContainer}>
          <Image style={styles.tinyLogo} source={images.cats} />
        </View>
        <View style={{
          marginLeft: 5,
          flexDirection: 'column',
          justifyContent: 'center',
        }}
        >
          <CardStack
            verticalSwipe={false}
            renderNoMoreCards={() => null}
            ref={(swiper) => {
              this.swiper = swiper
            }}
          >
            {
              Demo.map((item, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <Card key={index}>
                  {
                    // MatchCarr is component of seen card
                  }
                  <MatchCard
                    image={item.image}
                    name={item.name}
                    description={item.description}
                    actions
                    onPressLeft={() => this.swiper.swipeLeft()}
                    onPressRight={() => this.swiper.swipeRight()}
                  />
                </Card>
              ))
            }
          </CardStack>
        </View>
      </View>
    )
  }
}

Explore.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ from: PropTypes.string }),
  }),
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }),
}

Explore.defaultProps = {
  route: { params: { from: '' } },
  navigation: { goBack: () => null },
}

export default Explore
