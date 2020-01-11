import * as ImageContainer from './images'
import { ManagementDashboard } from '../pages/managementDashboard'

export const WARD_LEFT_HEADER_DATA = [
    {
        imageName: 'ward_menu',
        url: '/ward-dashboard',
        iconName: 'Home'
    },
    {
        imageName: 'operation_menu',
        url: '/ward-operation',
        iconName: 'Operation'

    },
    {
        imageName: 'device_menu',
        url: '/ward-device',
        iconName: 'Device'
    },
    {
        imageName: 'nurse_menu',
        url: '/ward-nurse',
        iconName: 'Nurse'
    },
    {
        imageName: 'setting_menu',
        url: '/ward-setting',
        iconName: 'Setting'
    }
]

export const MANAGEMENT_LEFT_HEADER_DATA = [
    {
        imageName: 'ward_menu',
        url: '/management-dashboard',
        iconName: 'home'
    },
    {
        imageName: 'operation_menu',
        url: '/management-ward',
        iconName: 'Operation'
    },
    {
        imageName: 'device_menu',
        url: '/management-device',
        iconName: 'Device'
    },
    {
        imageName: 'nurse_menu',
        url: '/management-nurse',
        iconName: 'Nurse'
    },
    {
        imageName: 'setting_menu',
        url: '/management-setting',
        iconName: 'Setting'
    }
]

export const ManagementDashboardData = [{count:'15', text:'Wards registered', image: ImageContainer.OPERATION_LARGE, url: '/management-ward' }, {count:'400', text:'Total devices deployed', image: ImageContainer.DEVICE_LARGE, url: '/management-device' },{count:'189', text:'All nurses registered', image: ImageContainer.NURSE_LARGE, url: '/management-nurse' },{count:'532', text:'All operations done', image: ImageContainer.DRIP_ICON, url: '/management-ward' }] 