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
    },
    effects: {
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

        saveConnectedPlatforms(state, { payload }) {
            return {
                ...state,
                connectedPlatforms: payload.data
            }
        }
    }
};

export default OutletModel;