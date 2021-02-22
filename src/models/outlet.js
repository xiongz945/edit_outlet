import { initialHours } from '../utils/constants';
import moment from 'moment';
import {queryConnectedPlatforms, querySavedOutletInfo} from '../services/outlet';
import { isEmpty } from 'lodash';

const OutletModel = {
    namespace: 'outlet',
    state: {
        brandName: '',
        outletName: '',
        address: '',
        phoneNumber: '',
        serviceOptions: {
            all: false,
            options: []
        },
        connectedPlatforms: [],
        operatingHoursForDineIn: initialHours,
        operatingHoursForDelivery: initialHours,
        specialHoursForDineIn: {},
        specialHoursForDelivery: {},
    },
    effects: {
        *fetchSavedOutlet(_, {call, put}) {
            const response = yield call(querySavedOutletInfo);
            yield put({
                type: 'saveOutlet',
                payload: response,
            });
        },
        *fetchConnectedPlatforms(_, {call, put}) {
            const response = yield call(queryConnectedPlatforms);
            yield put({
                type: 'saveConnectedPlatforms',
                payload: response,
            });
        },
    },
    reducers: {
        saveOutlet(state, { payload }) {
            return {
                ...state,
                brandName: payload["brand-name"],
                outletName: payload["outlet-name"],
                address: payload["address"],
                phoneNumber: payload["phone-number"],
                serviceOptions: payload["service-options"],
            }
        },

        saveOperatingHours(state, { payload }) {
            const {operation, special} = payload;
            const operatingHoursForDelivery = [];
            const operatingHoursForDineIn = [];
            for (const day in operation) {
                if (operation[day].hasOwnProperty("delivery")) {
                    const { delivery } = operation[day];

                    let deliveryHours = []
                    let isDeliveryOpen = delivery[0].isopen;
                    if (isDeliveryOpen) {
                        for (const element of delivery) {
                            deliveryHours.push(element.range);
                        }
                    }
                    operatingHoursForDelivery.push({
                        day,
                        isOpen: isDeliveryOpen,
                        hours: deliveryHours
                    });
                }

                if (operation[day].hasOwnProperty("dinein")) {
                    const { dinein } = operation[day];
                    let dineInHours = [];
                    let isDineInOpen = dinein[0].isopen;
                    if (isDineInOpen) {
                        for (const element of dinein) {
                            dineInHours.push(element.range);
                        }
                    }
                    operatingHoursForDineIn.push({
                        day,
                        isOpen: isDineInOpen,
                        hours: dineInHours
                    });
                }
            }
                
            let specialHoursForDelivery = {};
            let specialHoursForDineIn = {};

            if (special.hasOwnProperty("delivery")) {
                const { delivery } = special;
                if (typeof delivery !== "undefined") {
                    for (const entry in delivery) {
                        const day = delivery[entry].date.format('YYYY-MM-DD');
                        specialHoursForDelivery[day] = {
                            ...specialHoursForDelivery[day],
                            isOpen: delivery[entry].isopen
                        };
                        if (specialHoursForDelivery[day].hasOwnProperty("range")) {
                            specialHoursForDelivery[day]["range"].push(delivery[entry].range);
                        } else {
                            specialHoursForDelivery[day]["range"] = [delivery[entry].range];
                        }
                    }
                }
            }
            if (special.hasOwnProperty("dinein")) {
                const { dinein } = special;
                if (typeof dinein !== "undefined") {
                    for (const entry in dinein) {
                        const day = dinein[entry].date.format('YYYY-MM-DD');
                        specialHoursForDineIn[day] = {
                            ...specialHoursForDineIn[day],
                            isOpen: dinein[entry].isopen
                        };
                        if (specialHoursForDineIn[day].hasOwnProperty("range")) {
                            specialHoursForDineIn[day]["range"].push(dinein[entry].range);
                        } else {
                            specialHoursForDineIn[day]["range"] = [dinein[entry].range];
                        }
                    }
                }
                
            }
            
            return {
                ...state,
                operatingHoursForDelivery: operatingHoursForDelivery.length > 0 ? operatingHoursForDelivery : state.operatingHoursForDelivery,
                operatingHoursForDineIn: operatingHoursForDineIn.length > 0 ? operatingHoursForDineIn : state.operatingHoursForDineIn,
                specialHoursForDelivery: isEmpty(specialHoursForDelivery) ? state.specialHoursForDelivery : specialHoursForDelivery,
                specialHoursForDineIn: isEmpty(specialHoursForDineIn) ? state.specialHoursForDineIn : specialHoursForDineIn
            }
        },

        saveConnectedPlatforms(state, { payload }) {
            return {
                ...state,
                connectedPlatforms: payload.data
            }
        }
    }
};

export default OutletModel;