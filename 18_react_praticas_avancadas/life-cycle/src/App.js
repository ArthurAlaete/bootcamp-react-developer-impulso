import React, { useState, useEffect } from 'react';
import { ThemeContext, themes } from './contexts/Theme';
import Twitter from "./components/Twitter/index";
import TwitterWithHooks from './components/TwitterWithHooks';
import Card from './components/Card';
import FragmentComponent from './components/FragmentComponent';
import RenderProps from './components/RenderProps/index'
import TypeChecking from './components/TypeChecking';
import RefsAndDOM from './components/RefsAndDOM';


const App  = () => {

    const [token, setToken] = useState('');

    const handleClick = () => alert('Iniciando...')

    useEffect(() => {
      setTimeout(() => {
        setToken('8qq89haj0hu98whegayuecvq8')
      }, 4000)
    }, [setToken])

    return (
      <ThemeContext.Provider value={{...themes, token: token }}>
        {/* <Twitter posts={this.state.posts} loading={this.state.loading}/>
        <TwitterWithHooks posts={this.state.posts} loading={this.state.loading}/> */}
        {/* <Card /> */}
        {/* <FragmentComponent /> */}
        {/* <ErrorBoundaryComponent /> */}
        {/* <RenderProps /> */}
        {/* <TypeChecking 
          cats={undefined}
          dogs={2}
          costumerName='ArthurAlaete'
          handleClick={handleClick}
          status='status2'
        /> */}
        <RefsAndDOM />
      </ThemeContext.Provider>
    );

}

export default App;
