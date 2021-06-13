import logicFoter from './logicFoter';
export const Footer = root => {
  const elements =
    '<footer><p>© 2021 | All Rights Reserved | Developed with ♥ by&nbsp; <a class="footerModalOpen" href=""> GoIT Students</a></p><div class="is-hidden footerModal"></div></footer>';
  root.insertAdjacentHTML('beforeend', elements);
  logicFoter();
};
