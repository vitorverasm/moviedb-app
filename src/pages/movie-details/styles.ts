import {Paragraph, Subheading, Title} from 'react-native-paper';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import styled from 'styled-components/native';
import {Container, CustomButton, Row} from '../../styles';
import theme from '../../styles/theme';

export const PageContainer = styled(Container)`
  background-color: ${theme.colors.white};
`;

export const PageTitle = styled(Title)``;

export const LoadingText = styled(Subheading)`
  font-weight: bold;
  color: ${theme.colors.black};
`;

export const LogoContainer = styled(Container)`
  justify-content: center;
  align-items: center;
`;

export const InfoContainer = styled(Container)`
  flex: 2;
`;

export const LogoShimmer = styled(ShimmerPlaceHolder).attrs(() => ({
  autoRun: true,
  duration: 700,
  colorShimmer: [
    theme.colors.lightGray,
    theme.colors.lightGray,
    theme.colors.lightGray
  ]
}))`
  width: 95%;
  height: 90%;
  border-radius: 6px;
  opacity: 0.3;
`;

export const BadgesShimmer = styled(ShimmerPlaceHolder).attrs(() => ({
  autoRun: true,
  duration: 700,
  colorShimmer: [
    theme.colors.lightGray,
    theme.colors.lightGray,
    theme.colors.lightGray
  ]
}))`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  opacity: 0.3;
`;

export const TextShimmer = styled(ShimmerPlaceHolder).attrs(() => ({
  autoRun: true,
  duration: 700,
  colorShimmer: [
    theme.colors.lightGray,
    theme.colors.lightGray,
    theme.colors.lightGray
  ]
}))<{widthPercentage?: string}>`
  height: 25px;
  opacity: 0.3;
  width: ${props =>
    props.widthPercentage ? `${props.widthPercentage}%` : '100%'};
  margin: 5px;
`;

export const Logo = styled.Image`
  width: 95%;
  height: 90%;
  border-radius: 6px;
`;

export const BadgesRow = styled(Row)`
  justify-content: space-around;
`;

export const Badges = styled(CustomButton).attrs(() => ({
  color: theme.colors.black
}))``;

export const Content = styled.ScrollView.attrs(() => ({
  showsVerticalScrollIndicator: false
}))<{loading?: boolean}>`
  margin-horizontal: 15px;
  margin-top: ${props => (props.loading ? '40px' : '10px')};
`;

export const ContentBody = styled.View`
  margin-vertical: 5px;
`;

export const ContentLabel = styled(Subheading)`
  font-weight: bold;
`;

export const ContentText = styled(Paragraph)`
  text-align: justify;
`;

export const DetailsButton = styled(CustomButton).attrs(() => ({
  mode: 'contained'
}))<{disabled?: boolean}>`
  background-color: ${props =>
    props.disabled ? theme.colors.lightGray : theme.colors.accent};
  margin: 5px;
`;

export const VideoContainer = styled(Container)`
  flex: 4;
  margin-horizontal: 15px;
`;
