import select from 'select-dom';
import onetime from 'onetime';
import * as pageDetect from '../libs/page-detect';
import {safeElementReady} from '../libs/utils';

/* Remove "Repositories you contribute to" dashboard sidebar box */
export default async function () {
  if (pageDetect.isDashboard()) {
	  const sidebar = await safeElementReady('.dashboard-sidebar');
		const sidebarBox = select('.dashboard-sidebar > .boxed-group[role="navigation"]:not(.repos)');
    if (sidebarBox) {
      sidebarBox.remove();
    }
  }
}
