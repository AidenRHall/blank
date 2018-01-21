import * as React from 'react';
import NotificationsModal from './notifications/NotificationsModal';

// All modals will live here and be triggered through redux
class Modals extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <NotificationsModal />
            </div>
        );
    }
}

export default Modals;
