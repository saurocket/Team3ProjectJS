export const Header = (root) => {
  const elements =`
   <header>
      <div class="header-container">
             <h1>Hello Team 3</h1>
      </div>
    </header>`;

  root.insertAdjacentHTML('afterbegin', elements);


};