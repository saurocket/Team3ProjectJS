
import { ErrorMessage } from './ErrorMessage';
import { PreloaderCard } from './PreloaderCards';
import { FinallyCard } from './FinallyCard';
import { startPagination } from './pagination';
import { getCurrentPage } from '../../Store/selectors/getCurrentPage';
import { getAllCountPages } from '../../Store/selectors/getAllCountPages';

export const Main = (root, state) => {
  const{isFound, actualEvents} = state

  if(isFound === false){
    ErrorMessage()
    return;
  }
  if(actualEvents === null){
    PreloaderCard(root)
    return;
  }

  FinallyCard(root, actualEvents)
  startPagination(root, getCurrentPage(), getAllCountPages())
  return;

};