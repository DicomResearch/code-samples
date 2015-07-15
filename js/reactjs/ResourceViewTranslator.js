/**
 * Содержит перевод названий полей формы
 */
export class ResourceViewTranslator {
    /**
     * constructor
     */
    constructor() {
        this.map = {
            name: 'Наименование',
            staff: 'Сотрудник',
            equipment: 'Оборудование',
            workplace: 'Рабочее место',
            allowNoOperationTime: 'Возможность назначать в неприменое время',
            durationCalculationStrategy: 'Длительность приема',
            extendedAppointmentForm: 'Скрывать услуги из ресурса в расписании',
            relatedServices: 'Оказываемые услуги'
        };
    }

    /**
     * Отдать замапленное значение
     *
     * @param key
     * @returns {*}
     */
    getTranslated(key) {
        return this.map[key];
    }
}