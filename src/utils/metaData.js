import * as ImageContainer from './images'
import { ManagementDashboard } from '../pages/managementDashboard'

export const WARD_LEFT_HEADER_DATA = [
    {
        imageName: 'ward_menu',
        url: '/ward-dashboard'
    },
    {
        imageName: 'operation_menu',
        url: '/ward-operation'
    },
    {
        imageName: 'device_menu',
        url: '/ward-device'
    },
    {
        imageName: 'nurse_menu',
        url: '/ward-nurse'
    },
    {
        imageName: 'setting_menu',
        url: '/ward-setting'
    }
]

export const MANAGEMENT_LEFT_HEADER_DATA = [
    {
        imageName: 'ward_menu',
        url: '/management-dashboard'
    },
    {
        imageName: 'operation_menu',
        url: '/management-ward'
    },
    {
        imageName: 'device_menu',
        url: '/management-device'
    },
    {
        imageName: 'nurse_menu',
        url: '/management-nurse'
    },
    {
        imageName: 'setting_menu',
        url: '/management-setting'
    }
]

export const ManagementDashboardData = [{count:'15', text:'Wards registered', image: ImageContainer.OPERATION_LARGE }, {count:'400', text:'Total devices deployed', image: ImageContainer.DEVICE_LARGE },{count:'189', text:'All nurses registered', image: ImageContainer.NURSE_LARGE },{count:'532', text:'All operations done', image: ImageContainer.DRIP_ICON }] 