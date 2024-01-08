import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { APP_PREFIX_PATH } from '../../../configs/AppConfig';
import { env } from '../../../configs/EnvironmentConfig';
import IntlMessage from "../../../components/util-components/IntlMessage";
import utils from '../../../utils';
import { connect } from "react-redux";

// export const WidgetAction = props => {
export const WidgetAction = ({isCollapsed}) => {
	const locale = true;
	const setLocale = (isLocaleOn, localeKey) =>{		
		return isLocaleOn ? <IntlMessage id={localeKey} /> : localeKey.toString();
	}	


	const doAction = () => {
		alert("Do Action");
	}

	if(!isCollapsed){
		return (
			<div className="widget-action">		
				<p className="help-center-wrapper">			
				{/* TITULINO ENABLE ONCE THIS PAGE IS DONE */}
				{/* <Link to={`${APP_PREFIX_PATH}/help-center`}>
					<img className="help-center" src="/img/others/Side-Nave-Life-Ring-Light.svg" alt="" />{setLocale(locale, "profile.help.center")}
				</Link>					 */}
				</p>
				<Link onClick={()=> doAction()}>
					<Button>{setLocale(locale, "profile.donate")}</Button>
				</Link>			
			</div>
		)
	}else{
		return (
			<div className="widget-action-collapsed">		
				<p className="help-center-wrapper">			
				{/* TITULINO ENABLE ONCE THIS PAGE IS DONE */}
				{/* <Link to={`${APP_PREFIX_PATH}/help-center`}>
					<img className="help-center" src="/img/others/Side-Nave-Life-Ring-Light.svg" alt="" />
				</Link>					 */}
				</p>
				<Link onClick={()=> doAction()}>
					<img className="help-center" src="/img/others/angle-double-left-solid.svg" alt="" />
				</Link>			
			</div>
		)
	}
	
}

export default WidgetAction;
// const mapStateToProps = ({ lrn }) => {
// 	const { } = lrn;
// 	return {  }
// };

// export default connect(mapStateToProps, {})(WidgetAction);
