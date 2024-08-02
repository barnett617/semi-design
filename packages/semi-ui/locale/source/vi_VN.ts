import { vi } from 'date-fns/locale';
import { Locale } from '../interface';

const local: Locale = {
    code: 'vi-VN',
    dateFnsLocale: vi,
    Pagination: {
        pageSize: 'Số mục mỗi trang: ${pageSize}',
        total: 'Tổng số trang: ${total}',
        jumpTo: 'Chuyển đến',
        page: ' Số trang',
    },
    Modal: {
        confirm: 'Xác nhận',
        cancel: 'Huỷ bỏ',
    },
    Tabs: {
        more: "Hơn"
    },
    TimePicker: {
        placeholder: {
            time: 'Chọn thời gian',
            timeRange: 'Chọn phạm vi thời gian',
        },
        begin: 'Thời gian bắt đầu',
        end: 'Thời gian kết thúc',
        hour: 'giờ',
        minute: 'phút',
        second: 'giây',
        // hour: '',
        // minute: '',
        // second: '',
        AM: 'buổi sáng',
        PM: 'vào buổi chiều',
    },
    DatePicker: {
        placeholder: {
            date: 'Chọn ngày',
            dateTime: 'Chọn ngày và giờ',
            dateRange: ['Ngày bắt đầu', 'Ngày kết thúc'],
            dateTimeRange: ['Ngày bắt đầu', 'Ngày kết thúc'],
            monthRange: ['Tháng bắt đầu', 'Tháng kết thúc'],
        },
        presets: 'Lựa chọn nhanh',
        footer: {
            confirm: 'Xác nhận',
            cancel: 'Huỷ bỏ',
        },
        selectDate: 'Chọn ngày',
        selectTime: 'Chọn thời gian',
        year: 'năm',
        month: 'tháng',
        day: 'ngày',
        monthText: '${month} ${year}',
        months: {
            1: 'Một',
            2: 'Hai',
            3: 'Ba',
            4: 'Tư',
            5: 'Năm',
            6: 'Sáu',
            7: 'Bảy',
            8: 'Tám',
            9: 'Chín',
            10: 'Mười',
            11: 'Mười một',
            12: 'Mười hai',
        },
        fullMonths: {
            1: 'Tháng Một',
            2: 'Tháng Hai',
            3: 'Tháng Ba',
            4: 'Tháng Tư',
            5: 'Tháng Năm',
            6: 'Tháng Sáu',
            7: 'Tháng Bảy',
            8: 'Tháng Tám',
            9: 'Tháng Chín',
            10: 'Tháng Mười',
            11: 'Tháng Mười một',
            12: 'Tháng Mười hai',
        },
        weeks: {
            Mon: 'Thứ Hai',
            Tue: 'Thứ Ba',
            Wed: 'Thứ Tư',
            Thu: 'Thứ Năm',
            Fri: 'Thứ Sáu',
            Sat: 'Thứ bảy',
            Sun: 'Chủ nhật',
        },
        localeFormatToken: {
            FORMAT_SWITCH_DATE: 'dd/MM/yyyy',
        },
    },
    Popconfirm: {
        confirm: 'Xác nhận',
        cancel: 'Huỷ bỏ',
    },
    Navigation: {
        collapseText: 'Thu gọn Thanh bên',
        expandText: 'Mở rộng Thanh bên',
    },
    Table: {
        emptyText: 'Không kết quả',
        pageText: 'Hiển thị ${currentStart} đến ${currentEnd} trong tổng số ${total}',
    },
    Select: {
        emptyText: 'Không kết quả',
        createText: 'Tạo nên',
    },
    Tree: {
        emptyText: 'Không kết quả',
        searchPlaceholder: 'Tìm kiếm',
    },
    Cascader: {
        emptyText: 'Không kết quả',
    },
    List: {
        emptyText: 'Không kết quả',
    },
    Calendar: {
        allDay: 'Cả ngày',
        AM: 'buổi sáng ${time}',
        PM: 'buổi chiều ${time}',
        datestring: '',
        remaining: '${remained} mặt hàng',
    },
    Upload: {
        mainText: 'Nhấp để Tải tệp lên hoặc Kéo tệp vào đây',
        illegalTips: 'Loại tệp này không được hỗ trợ',
        legalTips: 'Phát hành và bắt đầu tải lên',
        retry: 'Thử lại',
        replace: 'Thay thế tệp',
        clear: 'Xoá',
        selectedFiles: 'Tệp đã chọn',
        illegalSize: 'Kích thước tệp không hợp lệ',
        fail: 'Tải lên không thành công',
    },
    TreeSelect: {
        searchPlaceholder: 'Tìm kiếm',
    },
    Typography: {
        copy: 'Sao chép',
        copied: 'Đã sao chép',
        expand: 'Mở rộng',
        collapse: 'Thu gọn',
    },
    Transfer: {
        emptyLeft: 'Không có dữ liệu',
        emptySearch: 'Không có kết quả tìm kiếm',
        emptyRight: 'Không có nội dung, kiểm tra từ bên trái',
        placeholder: 'Tìm kiếm',
        clear: 'Clear',
        selectAll: 'Chọn tất cả',
        clearSelectAll: 'Bỏ chọn tất cả',
        total: 'Tổng số mục: ${total}',
        selected: 'Số mục đã chọn: ${total}',
    },
    Form: {
        optional: '(không bắt buộc)',
    },
    Image: {
        preview: 'Xem trước',
        loading: 'Đang tải',
        loadError: 'Không tải được',
        prevTip: 'Trước đó',
        nextTip: 'Tiếp theo',
        zoomInTip: 'Phóng to',
        zoomOutTip: 'Thu nhỏ',
        rotateTip: 'Xoay',
        downloadTip: 'Download',
        adaptiveTip: 'Thích ứng với trang',
        originTip: 'Kích thước ban đầu',
    },
};

// [i18n-Vietnam] 越南语
export default local;
