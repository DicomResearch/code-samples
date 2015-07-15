import * as React from 'react';
import {ResourceViewFactory} from './ResourceViewFactory.js';
import {ResourceViewStorage} from './ResourceViewStorage.js';
import {ModuleInterface} from 'modules/common/ModuleInterface.js';

/**
 * Модуль просмотра ресурса
 */
export class ResourceViewModule extends ModuleInterface{

    /**
     * входная точка в модуль
     */
    run() {
        // подтянем данные с сервера чтобы потом построить компонент
        this.storage.getData();
    }

    /**
     * Подписываемся на события
     */
    subscribeEvents() {
        let renderResourceViewForm = function(msg, resourceData) {
            let resourceViewForm = ResourceViewFactory.create(resourceData);
            React.render(resourceViewForm, document.getElementById('content'));
        };

        // когда с сервера придут данные, построить элемент
        PubSub.subscribe('resource.view.storage.getData', renderResourceViewForm);
    }

    /**
     * создаем компоненты
     */
    createComponents() {
        this.storage = new ResourceViewStorage();
        this.component = null;
    }
}

let module = new ResourceViewModule();
module.run();
