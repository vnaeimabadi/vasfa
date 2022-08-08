import { Progressbar } from 'app/components/Progressbar'
import { SectionTitle } from 'app/components/SectionTitle'
import { containerStyle, height } from 'app/constants/theme'
import { H1, H2, H4, Image, P, Text, View } from 'dripsy'
const ourClients = [
  {
    icon: 'http://vasfa.ir/wp-content/uploads/2021/03/15.png',
  },
  {
    icon: 'http://vasfa.ir/wp-content/uploads/2021/03/8.png',
  },
  {
    icon: 'http://vasfa.ir/wp-content/uploads/2021/03/20.png',
  },
  {
    icon: 'http://vasfa.ir/wp-content/uploads/2021/03/4.png',
  },
  {
    icon: 'http://vasfa.ir/wp-content/uploads/2020/04/mci.png',
  },
  {
    icon: 'http://vasfa.ir/wp-content/uploads/2020/03/shora.png',
  },
  {
    icon: 'http://vasfa.ir/wp-content/uploads/2021/03/2.png',
  },
  {
    icon: 'http://vasfa.ir/wp-content/uploads/2021/03/11.png',
  },
]
export const Clients = () => {
  return (
    <View sx={{ ...containerStyle, py: 40, backgroundColor: '#EDEDED' }}>
      <View
        sx={{
          flex: 1,
          alignItems: 'center',
          width: ['90%', '90%', '90%'],
        }}
      >
        <View
          sx={{
            justifyContent: 'center',
            flex: 1,
            width: '100%',
          }}
        >
          <SectionTitle title="OUR CLIENTS" />
          <View
            sx={{
              flexDirection: ['row'],
              justifyContent: ['space-evenly'],
              alignContent: ['center'],
              alignSelf: ['center'],
              flex: 1,
              flexWrap: ['wrap'],
              width: '100%',
            }}
          >
            {ourClients.map((ele, index) => {
              return (
                <View
                  key={`ourClients-${index}`}
                  sx={{
                    width: ['45%', '30%', '17%'],
                    // height: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                    m: 1,
                    mb: 3,
                  }}
                >
                  <Image
                    sx={{
                      // width: width * 0.4, //for full screen
                      //   height: [height * 0.4, height * 0.4, height * 0.6],
                      // flex: 1,
                      width: 150,
                      aspectRatio: 1,
                    }}
                    resizeMode="contain"
                    source={{
                      uri: ele.icon,
                    }}
                  />
                </View>
              )
            })}
          </View>
        </View>
      </View>
    </View>
  )
}
