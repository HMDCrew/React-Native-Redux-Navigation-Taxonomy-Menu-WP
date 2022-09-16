import { StyleSheet } from 'react-native'
import { COLORS, FONTS, SIZES, SHADOWS, assets } from './theme'

export { COLORS, FONTS, SIZES, assets };

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    d_flex: { flex: 1 },
    zIndex_1: { zIndex: -1 },
    zIndex0: { zIndex: 0 },
    zIndex1: { zIndex: 1 },
    p_1: {
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    p_2: {
        paddingVertical: 20,
        paddingHorizontal: 20
    },
    p_3: {
        paddingVertical: 30,
        paddingHorizontal: 30
    },
    p_4: {
        paddingVertical: 40,
        paddingHorizontal: 40
    },
    p_5: {
        paddingVertical: 50,
        paddingHorizontal: 50
    },
    py_1: { paddingVertical: 10 },
    py_2: { paddingVertical: 20 },
    py_3: { paddingVertical: 30 },
    py_4: { paddingVertical: 40 },
    py_5: { paddingVertical: 50 },
    px_1: { paddingHorizontal: 10 },
    px_2: { paddingHorizontal: 20 },
    px_3: { paddingHorizontal: 30 },
    px_4: { paddingHorizontal: 40 },
    px_5: { paddingHorizontal: 50 },
    pt_1: { paddingTop: 10 },
    pt_2: { paddingTop: 20 },
    pt_3: { paddingTop: 30 },
    pt_4: { paddingTop: 40 },
    pt_5: { paddingTop: 50 },
    pb_1: { paddingBottom: 10 },
    pb_2: { paddingBottom: 20 },
    pb_3: { paddingBottom: 30 },
    pb_4: { paddingBottom: 40 },
    pb_5: { paddingBottom: 50 },
    pr_1: { paddingRight: 10 },
    pr_2: { paddingRight: 20 },
    pr_3: { paddingRight: 30 },
    pr_4: { paddingRight: 40 },
    pr_5: { paddingRight: 50 },
    pl_1: { paddingLeft: 10 },
    pl_2: { paddingLeft: 20 },
    pl_3: { paddingLeft: 30 },
    pl_4: { paddingLeft: 40 },
    pl_5: { paddingLeft: 50 },

    m_1: {
        marginVertical: 10,
        marginHorizontal: 10
    },
    m_2: {
        marginVertical: 20,
        marginHorizontal: 20
    },
    m_3: {
        marginVertical: 30,
        marginHorizontal: 30
    },
    m_4: {
        marginVertical: 40,
        marginHorizontal: 40
    },
    m_5: {
        marginVertical: 50,
        marginHorizontal: 50
    },
    my_1: { marginVertical: 10 },
    my_2: { marginVertical: 20 },
    my_3: { marginVertical: 30 },
    my_4: { marginVertical: 40 },
    my_5: { marginVertical: 50 },
    mx_1: { marginHorizontal: 10 },
    mx_2: { marginHorizontal: 20 },
    mx_3: { marginHorizontal: 30 },
    mx_4: { marginHorizontal: 40 },
    mx_5: { marginHorizontal: 50 },
    mt_1: { marginTop: 10 },
    mt_2: { marginTop: 20 },
    mt_3: { marginTop: 30 },
    mt_4: { marginTop: 40 },
    mt_5: { marginTop: 50 },
    mb_1: { marginBottom: 10 },
    mb_2: { marginBottom: 20 },
    mb_3: { marginBottom: 30 },
    mb_4: { marginBottom: 40 },
    mb_5: { marginBottom: 50 },
    mr_1: { marginRight: 10 },
    mr_2: { marginRight: 20 },
    mr_3: { marginRight: 30 },
    mr_4: { marginRight: 40 },
    mr_5: { marginRight: 50 },
    ml_1: { marginLeft: 10 },
    ml_2: { marginLeft: 20 },
    ml_3: { marginLeft: 30 },
    ml_4: { marginLeft: 40 },
    ml_5: { marginLeft: 50 },

    w_100: { width: '100%' },
    w_90: { width: '90%' },
    w_80: { width: '80%' },
    w_70: { width: '70%' },
    w_60: { width: '60%' },
    w_50: { width: '50%' },
    w_40: { width: '40%' },
    w_30: { width: '30%' },
    w_20: { width: '20%' },
    w_10: { width: '10%' },
    mw_100: { maxHidth: '100%' },
    mw_90: { maxWidth: '90%' },
    mw_80: { maxWidth: '80%' },
    mw_70: { maxWidth: '70%' },
    mw_60: { maxWidth: '60%' },
    mw_50: { maxWidth: '50%' },
    mw_40: { maxWidth: '40%' },
    mw_30: { maxWidth: '30%' },
    mw_20: { maxWidth: '20%' },
    mw_10: { maxWidth: '10%' },

    h_100: { height: '100%' },
    h_90: { height: '90%' },
    h_80: { height: '80%' },
    h_70: { height: '70%' },
    h_60: { height: '60%' },
    h_50: { Height: '50%' },
    h_40: { height: '40%' },
    h_30: { height: '30%' },
    h_20: { height: '20%' },
    h_10: { height: '10%' },
    mh_100: { maxHeight: '100%' },
    mh_90: { maxHeight: '90%' },
    mh_80: { maxHeight: '80%' },
    mh_70: { maxHeight: '70%' },
    mh_60: { maxHeight: '60%' },
    mh_50: { maxHeight: '50%' },
    mh_40: { maxHeight: '40%' },
    mh_30: { maxHeight: '30%' },
    mh_20: { maxHeight: '20%' },
    mh_10: { maxHeight: '10%' },

    border_1: { borderWidth: 1 },
    border_2: { borderWidth: 2 },
    border_3: { borderWidth: 3 },
    border_4: { borderWidth: 4 },
    border_5: { borderWidth: 5 },

    bg_white: { backgroundColor: COLORS.white },
    bg_primary: { backgroundColor: COLORS.primary },
    bg_secondary: { backgroundColor: COLORS.secondary },
    bg_success: { backgroundColor: COLORS.success },
    bg_info: { backgroundColor: COLORS.info },
    bg_warning: { backgroundColor: COLORS.warning },
    bg_danger: { backgroundColor: COLORS.danger },
    bg_light: { backgroundColor: COLORS.light },
    bg_dark: { backgroundColor: COLORS.dark },

    text_white: { color: COLORS.white },
    text_primary: { color: COLORS.primary },
    text_secondary: { color: COLORS.secondary },
    text_success: { color: COLORS.success },
    text_info: { color: COLORS.info },
    text_warning: { color: COLORS.warning },
    text_danger: { color: COLORS.danger },
    text_light: { color: COLORS.light },
    text_dark: { color: COLORS.dark }
})

