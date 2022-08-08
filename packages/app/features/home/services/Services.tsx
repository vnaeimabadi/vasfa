import { SectionTitle } from 'app/components/SectionTitle'
import { containerStyle, height, width } from 'app/constants/theme'
import { Image, View } from 'dripsy'
import { SingleService } from './SingleService'
const solutionsContent = [
  {
    title: 'Mobile App Development',
    icon: 'cogs',
    content:
      'Create an impactful mobile app that fits your brand and industry within a shorter time frame',
  },
  {
    title: 'Managed Service',
    icon: 'globe',
    content:
      'We offers a managed service solution to different tech-business companies that takes ownership of the entire process from technical integration to business development, committing to maximizing revenues for all parties.',
  },
  {
    title: 'E-Commerce',
    icon: 'cogs',
    content:
      'We can help you move your offline sales business to online, by creating an E-commerce platform containing your inventory of products, with attractive designs, and connect you to billing and shipping gateways to help you expand your business even across borders.',
  },
]
export const Services = () => {
  const renderBody = () => {
    return (
      <View>
        {solutionsContent.map((ele, index) => (
          <SingleService
            key={`services-${index}`}
            title={ele.title}
            content={ele.content}
            icon={{
              name: ele.icon,
              size: 24,
            }}
          />
        ))}
      </View>
    )
  }
  return (
    <View
      sx={{
        // flex:1,
        ...containerStyle,
        backgroundColor: '#EDEDED',
        flexDirection: ['column', 'column', 'row'],
        pt: 5,
      }}
    >
      <View
        sx={{
          flex: 1,
          justifyContent: 'center',
          mt: 40,
          alignItems: 'center',
        }}
      >
        <View sx={{ width: ['90%', '70%', '70%'] }}>
          <SectionTitle title="WHAT WE OFFER" />
          {renderBody()}
        </View>
      </View>
      <View
        sx={{
          flex: [0.5, 0.5, 1],
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          sx={{
            // width: width * 0.4, //for full screen
            height: [height * 0.4, height * 0.4, height * 0.6],
            // flex: 1,
            aspectRatio: [1.2, 1.5, 1],
          }}
          resizeMode="contain"
          source={{
            uri: '/images/services-1.png',
          }}
        />
      </View>
    </View>
  )
}
