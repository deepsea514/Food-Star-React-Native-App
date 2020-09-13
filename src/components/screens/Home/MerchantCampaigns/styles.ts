import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  merchantCampaignContainer: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  campaignItem: {
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  campaignImage: {
    width: 70,
    height: 70,
  },
  campaignTitleContainer: {
    backgroundColor: 'transparent',
    width: '100%',
    marginLeft: 10,
  },
  campaignTitle: {
    fontWeight: 'bold',
    color: 'white',
  },
  campaignSubTitle: {
    color: 'white',
    fontSize: 12,
    marginTop: 2,
  },
});
