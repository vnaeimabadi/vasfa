import { Progressbar } from 'app/components/Progressbar'
import { SectionTitle } from 'app/components/SectionTitle'
import { containerStyle, height } from 'app/constants/theme'
import { H1, H2, H4, P, Text, View } from 'dripsy'
const data = [
  {
    content: 'Mobile SMS Gateway',
  },
  {
    content: 'Service Delivery Platform (Mobile company)',
  },
  {
    content: 'UGC Knowledge-sharing Q&A Web/Mobile app Platform',
  },
  {
    content: 'Lock-screen Android based Mobile App Platform (startup)',
  },
  {
    content: 'Cloth-sharing PWA/Mobile/Web app (startup)',
  },
  {
    content: 'Land Transportation 3-sided Web Platform (startup)',
  },
  {
    content: 'Mobile/Web application developement (Front-end/Back-end)',
  },
]
export const About = () => {
  const renderUnorderList = ({
    content,
    index,
  }: {
    content: string
    index: number
  }) => {
    return (
      <View
        key={`unorderList-${index}`}
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text sx={{ fontSize: 26 }}>{'\u2022'}</Text>
        <Text style={{ flex: 1, paddingLeft: 5 }}>{content}</Text>
      </View>
    )
  }
  return (
    <View sx={{ ...containerStyle ,py:40}}>
      <View
        sx={{
          //   justifyContent: 'center',
          alignItems: 'center',
          width: ['90%', '90%', '60%'],
          flex: 1,
        }}
      >
        <View
          sx={{
            justifyContent: 'center',
            flex: 1,
            // alignItems: 'center',
          }}
        >
          <SectionTitle title="ABOUT US" />
          <P sx={{ color: 'black', fontSize: 16, lineHeight: 26 }}>
            Since 2015, VASFA Co. has committed to providing innovative,
            reliable, and professional Digital Media services. We are connected
            directly to over 10 mobile network operators in more than 6
            countries in the Middle East, South Africa, and other countries.
          </P>
          <P sx={{ color: 'black', fontSize: 16, lineHeight: 26 }}>
            The key advantage of VASFA Co. is its human resources. The young and
            simultaneously experienced technical team makes the company agile
            and capable of delivering complicated projects on time and budget
            with the world-class standards of quality in the field.
          </P>
          <H4>
            Relying on the abilities of excellent human resources, VASFA has
            implemented the following services :
          </H4>
          <View sx={{ ml: 20 }}>
            {data.map((ele, index) => {
              return renderUnorderList({ content: ele.content, index })
            })}
          </View>
        </View>
      </View>
    </View>
  )
}
