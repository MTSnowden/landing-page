import React from 'react'
import { Switch, Route } from 'react-router-dom'

import SnowdenDentistry from './components/SnowdenDentistry'
import OurPractice from './components/OurPractice'
import OurDoctors from './components/OurDoctors'
import DentalCare from './components/DentalCare'
import CosmeticDentistry from './components/CosmeticDentistry'
import Faq from './components/Faq'
import Contact from './components/Contact'


const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={SnowdenDentistry}></Route>
            <Route path='/OurPractice' component={OurPractice}></Route>
            <Route path='/OurDoctors' component={OurDoctors}></Route>
            <Route path='/DentalCare' component={DentalCare}></Route>
            <Route path='/CosmeticDentistry' component={CosmeticDentistry}></Route>
            <Route path='/Faq' component={Faq}></Route>
            <Route path='/Contact' component={Contact}></Route>
        </Switch>
    );
}

export default Router