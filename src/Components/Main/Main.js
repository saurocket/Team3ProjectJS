
import { ErrorMessage } from './ErrorMessage';
import { PreloaderCard } from './PreloaderCards';
import { FinallyCard } from './FinallyCard';
import { Pagination } from './pagination';

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
  Pagination(root, actualEvents);
  return;

};