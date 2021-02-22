import request from '@/utils/request';

export async function queryConnectedPlatforms() {
    return request('/api/connectedPlatforms');
};

export async function querySavedOutletInfo() {
    return request('/api/getOutlet');
}