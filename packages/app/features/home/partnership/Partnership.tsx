import { Progressbar } from 'app/components/Progressbar'
import { containerStyle, height } from 'app/constants/theme'
import { P, Text, View } from 'dripsy'
import { SinglePartnership } from './SinglePartnership'

const items = [
  { title: 'Projects', count: 146, icon: 'briefcase' },
  { title: 'Users', count: 68302, icon: 'comments' },
  { title: 'Countries', count: 8, icon: 'graduation-cap' },
  { title: 'Partners', count: 12, icon: 'users' },
]

export const Partnership = () => {
  return (
    <View sx={{ ...containerStyle, backgroundColor: '#d65050' }}>
      <View
        sx={{ flexDirection: ['column', 'column', 'row'], flex: [1, 1, 3] }}
      >
        <View
          sx={{
            // flex: 1,
            width: ['100%', '100%', '50%'],
            // justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View
            sx={{
              //   justifyContent: 'center',
              alignItems: 'center',
              width: '90%',
              flex: 1,
            }}
          >
            <Text sx={{ color: 'white', fontSize: 32, mt: 20 }}>
              PARTNERSHIP
            </Text>
            <View
              sx={{
                justifyContent: 'center',
                flex: 1,
                alignItems: 'center',
              }}
            >
              <P sx={{ color: 'white', fontSize: 18, lineHeight: 26 }}>
                As a technology provider and ecosystem enabler, we are ready to
                cooperate with successful companies to share the experience and
                develop new markets.
              </P>
              <P sx={{ color: 'white', fontSize: 18, lineHeight: 26 }}>
                More than delivering consulting services, we actively address
                regulatory and business issues between ecosystem stakeholders
                and we operate a global technical platform on which local
                startup ecosystems can be safely and securely built and managed.
                We are committed ambassadors who share and spread our views with
                the world around them.
              </P>
            </View>
          </View>
        </View>
        <View
          sx={{
            width: ['100%', '100%', '50%'],
            minHeight: 300,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View
            sx={{
              width: '90%',
              overflow: ['hidden'],
              flex: 1,
              justifyContent: ['space-evenly'],
            }}
          >
            <Progressbar label="Enterprise App Development" percentage={95} />
            <Progressbar label="Mobile App Development" percentage={90} />
            <Progressbar label="Web App Development" percentage={100} />
            <Progressbar label="Technical Consultancy" percentage={85} />
          </View>
        </View>
      </View>
      <View
        sx={{
          flex: [null, null, 2],
          flexDirection: ['column', 'column', 'row'],
          justifyContent: ['space-between'],
          width: '50%',
          py: [40, 40, 0],
          alignItems: ['center'],
        }}
      >
        {items.map((ele, index) => {
          return (
            <SinglePartnership
              key={`partnership-${index}`}
              title={ele.title}
              count={ele.count}
              icon={{
                name: ele.icon,
                size: 24,
              }}
            />
          )
        })}
      </View>
    </View>
  )
}
