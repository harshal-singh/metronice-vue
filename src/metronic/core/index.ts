/*
 * Metronic
 * @author: Keenthemes
 * Copyright 2024 Keenthemes
 */

import KTDom from './helpers/dom';
import KTUtils from './helpers/utils';
import KTEventHandler from './helpers/event-handler';
import { KTMenu } from './components/menu';
import { KTDatePicker } from './components/date-picker';

export { KTMenu } from './components/menu';
export { KTDatePicker } from './components/date-picker';

const KTComponents = {
	init(): void {
		KTMenu.init();
		KTDatePicker.init();
	},
};

declare global {
	interface Window {
		KTUtils: typeof KTUtils;
		KTDom: typeof KTDom;
		KTEventHandler: typeof KTEventHandler;
		KTMenu: typeof KTMenu;
		KTDatePicker: typeof KTDatePicker;
		KTComponents: typeof KTComponents;
	}
}

window.KTUtils = KTUtils;
window.KTDom = KTDom;
window.KTEventHandler = KTEventHandler;
window.KTMenu = KTMenu;
window.KTDatePicker = KTDatePicker;
window.KTComponents = KTComponents;

export default KTComponents;

KTDom.ready(() => {
	KTComponents.init();
});
