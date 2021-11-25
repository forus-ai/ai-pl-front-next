import React from 'react';
import { IconProps } from '@chakra-ui/icon';

import ArrowDownIcon from '../System/ArrowDown';
import ArrowUpIcon from '../System/ArrowUp';
import MenuIcon from '../System/Menu';
import ArrowRightIcon from '../System/ArrowRight';
import ArrowLeftIcon from '../System/ArrowLeft';

import LogoIcon from './additional-icons/Logo';
import ArrowRightWithTailIcon from './additional-icons/ArrowRightWithTail';
import PaperClipIcon from './additional-icons/PaperClip';
import TargetingIcon from './additional-icons/Targeting';
import LabelsIcon from './additional-icons/Labels';
import ArrowDownDashTailIcon from './additional-icons/ArrowDownDashTail';
import PuzzleIcon from './additional-icons/Puzzle';
import SquarePointSquareIcon from './additional-icons/SquarePointSquare';
import PaperIcon from './additional-icons/Paper';
import UserFocusIcon from './additional-icons/UserFocus';
import DashBoardIcon from './additional-icons/DashBoard';
import CloseIcon from './additional-icons/Close';
import LockIcon from './additional-icons/Lock';
import ToolIcon from './additional-icons/Tool';
import HandAndHouseIcon from './additional-icons/HandAndHouse';
import CompassIcon from './additional-icons/Compass';
import RotationIcon from './additional-icons/Rotation';
import CallingWithSpeechBubbleIcon from './additional-icons/CallingWithSpeechBubble';
import PlusInPaperIcon from './additional-icons/PlusInPaper';
import ArrowUpInPaperIcon from './additional-icons/ArrowUpInPaper';
import PlusInCircleIcon from './additional-icons/PlusInCircle';
import MinusInCircleIcon from './additional-icons/MinusInCircle';
import EditIcon from './additional-icons/Edit';
import ArrowDownOnLine from './additional-icons/ArrowUpOnLine';
import SquareForwardIcon from './additional-icons/SquareForward';
import PinIcon from './additional-icons/Pin';
import ArrowUpOnLine from './additional-icons/ArrowUpOnLine';
import SquarePointCircleIcon from './additional-icons/SquarePointCircle';
import HouseOnLineIcon from './additional-icons/HouseOnLine';
import GraphMultiLineIcon from './additional-icons/GraphMultiLine';
import KaKaoLogoIcon from './additional-icons/KaKaoLogo';
import NaverLogoIcon from './additional-icons/NaverLogo';
import SettingLineIcon from './additional-icons/SettingLine';
import MoreIcon from '../System/More';

type IconNames =
  | 'logo'
  | 'close'
  | 'menu'
  | 'arrowUp'
  | 'arrowUpOnLine'
  | 'arrowUpInPaper'
  | 'arrowDown'
  | 'arrowDownOnLine'
  | 'arrowDownDashTail'
  | 'arrowRight'
  | 'arrowRightWithTail'
  | 'arrowLeft'
  | 'plusInPaper'
  | 'plusInCircle'
  | 'minusInCircle'
  | 'paper'
  | 'paperClip'
  | 'squareForward'
  | 'squarePointSquare'
  | 'squarePointCircle'
  | 'labels'
  | 'targeting'
  | 'puzzle'
  | 'userFocus'
  | 'dashboard'
  | 'lock'
  | 'tool'
  | 'handAndHouse'
  | 'compass'
  | 'rotation'
  | 'callingWithSpeechBubble'
  | 'edit'
  | 'pin'
  | 'houseOnLine'
  | 'graphMultiLine'
  | 'kakaoLogo'
  | 'naverLogo'
  | 'settingLine'
  | 'more';

export interface IconInAppProps extends IconProps {
  name: IconNames;
  variant?: 'solid' | 'outline';
}

const IconInApp = ({ name, ...iconProps }: IconInAppProps) => {
  switch (name) {
    case 'logo':
      return <LogoIcon {...iconProps} />;
    case 'arrowDown':
      return <ArrowDownIcon {...iconProps} />;
    case 'arrowUp':
      return <ArrowUpIcon {...iconProps} />;
    case 'arrowRightWithTail':
      return <ArrowRightWithTailIcon {...iconProps} />;
    case 'paperClip':
      return <PaperClipIcon {...iconProps} />;
    case 'targeting':
      return <TargetingIcon {...iconProps} />;
    case 'labels':
      return <LabelsIcon {...iconProps} />;
    case 'arrowDownDashTail':
      return <ArrowDownDashTailIcon {...iconProps} />;
    case 'puzzle':
      return <PuzzleIcon {...iconProps} />;
    case 'squarePointSquare':
      return <SquarePointSquareIcon {...iconProps} />;
    case 'paper':
      return <PaperIcon {...iconProps} />;
    case 'userFocus':
      return <UserFocusIcon {...iconProps} />;
    case 'dashboard':
      return <DashBoardIcon {...iconProps} />;
    case 'close':
      return <CloseIcon {...iconProps} />;
    case 'menu':
      return <MenuIcon {...iconProps} />;
    case 'lock':
      return <LockIcon {...iconProps} />;
    case 'tool':
      return <ToolIcon {...iconProps} />;
    case 'handAndHouse':
      return <HandAndHouseIcon {...iconProps} />;
    case 'compass':
      return <CompassIcon {...iconProps} />;
    case 'rotation':
      return <RotationIcon {...iconProps} />;
    case 'callingWithSpeechBubble':
      return <CallingWithSpeechBubbleIcon {...iconProps} />;
    case 'plusInPaper':
      return <PlusInPaperIcon {...iconProps} />;
    case 'arrowUpInPaper':
      return <ArrowUpInPaperIcon {...iconProps} />;
    case 'plusInCircle':
      return <PlusInCircleIcon {...iconProps} />;
    case 'minusInCircle':
      return <MinusInCircleIcon {...iconProps} />;
    case 'edit':
      return <EditIcon {...iconProps} />;
    case 'arrowDownOnLine':
      return <ArrowDownOnLine {...iconProps} />;
    case 'squareForward':
      return <SquareForwardIcon {...iconProps} />;
    case 'pin':
      return <PinIcon {...iconProps} />;
    case 'arrowUpOnLine':
      return <ArrowUpOnLine {...iconProps} />;
    case 'arrowRight':
      return <ArrowRightIcon {...iconProps} />;
    case 'arrowLeft':
      return <ArrowLeftIcon {...iconProps} />;
    case 'squarePointCircle':
      return <SquarePointCircleIcon {...iconProps} />;
    case 'houseOnLine':
      return <HouseOnLineIcon {...iconProps} />;
    case 'graphMultiLine':
      return <GraphMultiLineIcon {...iconProps} />;
    case 'kakaoLogo':
      return <KaKaoLogoIcon {...iconProps} />;
    case 'naverLogo':
      return <NaverLogoIcon {...iconProps} />;
    case 'settingLine':
      return <SettingLineIcon {...iconProps} />;
    case 'more':
      return <MoreIcon {...iconProps} />;
  }
};

export default React.memo(IconInApp);
