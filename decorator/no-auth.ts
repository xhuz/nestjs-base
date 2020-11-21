import {SetMetadata} from '@nestjs/common';
import {NO_AUTH} from '../constants';

export const NoAuth = SetMetadata(NO_AUTH, true);
