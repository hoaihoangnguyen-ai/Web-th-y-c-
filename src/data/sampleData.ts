/**
 * Dữ liệu mẫu minh họa cho môn Anh văn THCS
 * Cô giáo: Hoàng Thị Hoài - Trường THCS Nguyễn Thái Bình
 * Lưu ý: Toàn bộ dữ liệu dưới đây chỉ mang tính chất minh họa thao tác,
 * dễ dàng chỉnh sửa, thêm, xóa hoặc khôi phục bất cứ lúc nào.
 */

import { AppData, ClassItem, Student, Lesson, LearningTask, GradeEntry, StudentComment, ActivityLog } from '../types';

export const initialClasses: ClassItem[] = [
  {
    id: 'c-6a1',
    name: '6A1',
    gradeLevel: 6,
    room: 'Phòng 201',
    academicYear: '2025-2026',
    note: 'Lớp sôi nổi, hào hứng với hoạt động giao tiếp và phát âm tiếng Anh'
  },
  {
    id: 'c-7a1',
    name: '7A1',
    gradeLevel: 7,
    room: 'Phòng 203',
    academicYear: '2025-2026',
    note: 'Lực học đồng đều, có thế mạnh về từ vựng và ngữ pháp tiếng Anh'
  },
  {
    id: 'c-8a1',
    name: '8A1',
    gradeLevel: 8,
    room: 'Phòng 302',
    academicYear: '2025-2026',
    note: 'Tập trung rèn kỹ năng viết đoạn văn ngắn và kỹ năng Nghe hiểu'
  },
  {
    id: 'c-9a1',
    name: '9A1',
    gradeLevel: 9,
    room: 'Phòng 305',
    academicYear: '2025-2026',
    note: 'Lớp cuối cấp, chú trọng ôn thi vào 10 môn Tiếng Anh và kỹ năng Đọc hiểu'
  }
];

export const initialStudents: Student[] = [
  // Lớp 6A1
  { id: 's-601', studentCode: 'HS0601', fullName: 'Nguyễn Hoàng Nam', classId: 'c-6a1', gender: 'Nam', status: 'Đang học', note: 'Phát âm chuẩn, ngữ điệu tự nhiên, phản xạ nói tốt' },
  { id: 's-602', studentCode: 'HS0602', fullName: 'Trần Thị Mai Anh', classId: 'c-6a1', gender: 'Nữ', status: 'Đang học', note: 'Vốn từ vựng phong phú, làm bài tập ngữ pháp cẩn thận' },
  { id: 's-603', studentCode: 'HS0603', fullName: 'Lê Minh Đức', classId: 'c-6a1', gender: 'Nam', status: 'Đang học', note: 'Cần rèn thêm chia động từ và phát âm đuôi -s/es', needAttention: true },
  { id: 's-604', studentCode: 'HS0604', fullName: 'Phạm Thuỳ Linh', classId: 'c-6a1', gender: 'Nữ', status: 'Đang học', note: 'Tích cực phát biểu xây dựng bài học và luyện nói theo cặp' },
  { id: 's-605', studentCode: 'HS0605', fullName: 'Đỗ Quang Huy', classId: 'c-6a1', gender: 'Nam', status: 'Đang học', note: 'Cần nộp bài tập về nhà đúng hạn hơn', needAttention: true },
  { id: 's-606', studentCode: 'HS0606', fullName: 'Vũ Ngọc Bảo Trâm', classId: 'c-6a1', gender: 'Nữ', status: 'Đang học', note: 'Có năng khiếu đóng vai hội thoại tiếng Anh' },

  // Lớp 7A1
  { id: 's-701', studentCode: 'HS0701', fullName: 'Hoàng Quốc Tuấn', classId: 'c-7a1', gender: 'Nam', status: 'Đang học', note: 'Nắm chắc cấu trúc câu, viết câu hoàn chỉnh tốt' },
  { id: 's-702', studentCode: 'HS0702', fullName: 'Bùi Thanh Hằng', classId: 'c-7a1', gender: 'Nữ', status: 'Đang học', note: 'Yêu thích học từ vựng qua bài hát và trò chơi tương tác' },
  { id: 's-703', studentCode: 'HS0703', fullName: 'Nguyễn Đình Phúc', classId: 'c-7a1', gender: 'Nam', status: 'Đang học', note: 'Cần củng cố kiến thức về thì Quá khứ đơn (Past Simple)', needAttention: true },
  { id: 's-704', studentCode: 'HS0704', fullName: 'Đặng Ngọc Ánh', classId: 'c-7a1', gender: 'Nữ', status: 'Đang học', note: 'Trình bày bài nói thuyết trình tiếng Anh lưu loát, tự tin' },
  { id: 's-705', studentCode: 'HS0705', fullName: 'Phan Trọng Khang', classId: 'c-7a1', gender: 'Nam', status: 'Đang học', note: 'Hoàn thành tốt các dự án đọc sách tiếng Anh' },

  // Lớp 8A1
  { id: 's-801', studentCode: 'HS0801', fullName: 'Trịnh Gia Bảo', classId: 'c-8a1', gender: 'Nam', status: 'Đang học', note: 'Kỹ năng viết luận điểm tiếng Anh tốt, từ vựng phong phú' },
  { id: 's-802', studentCode: 'HS0802', fullName: 'Ngô Thảo My', classId: 'c-8a1', gender: 'Nữ', status: 'Đang học', note: 'Cẩn thận trong việc sử dụng mạo từ và giới từ' },
  { id: 's-803', studentCode: 'HS0803', fullName: 'Võ Minh Quân', classId: 'c-8a1', gender: 'Nam', status: 'Đang học', note: 'Cần chú ý kỹ năng Nghe hiểu và nối âm trong câu' },
  { id: 's-804', studentCode: 'HS0804', fullName: 'Lý Diệu Anh', classId: 'c-8a1', gender: 'Nữ', status: 'Đang học', note: 'Rất chăm chỉ học từ mới và làm bài tập ngữ pháp mở rộng' },
  { id: 's-805', studentCode: 'HS0805', fullName: 'Hồ Tuấn Kiệt', classId: 'c-8a1', gender: 'Nam', status: 'Đang học', note: 'Đang tiến bộ trong bài viết đoạn văn mô tả' },

  // Lớp 9A1
  { id: 's-901', studentCode: 'HS0901', fullName: 'Dương Khánh Linh', classId: 'c-9a1', gender: 'Nữ', status: 'Đang học', note: 'Học lực xuất sắc môn Anh văn, khả năng tự học cao' },
  { id: 's-902', studentCode: 'HS0902', fullName: 'Vũ Đức Thịnh', classId: 'c-9a1', gender: 'Nam', status: 'Đang học', note: 'Cần luyện thêm kỹ năng đọc hiểu văn bản dài và chiến thuật làm bài thi', needAttention: true },
  { id: 's-903', studentCode: 'HS0903', fullName: 'Trần Bích Phương', classId: 'c-9a1', gender: 'Nữ', status: 'Đang học', note: 'Khả năng giao tiếp tiếng Anh lưu loát, ngữ điệu chuẩn' },
  { id: 's-904', studentCode: 'HS0904', fullName: 'Lê Hoàng Long', classId: 'c-9a1', gender: 'Nam', status: 'Đang học', note: 'Vốn từ vựng chuyên đề phong phú, tham gia thảo luận hăng hái' },
  { id: 's-905', studentCode: 'HS0905', fullName: 'Nguyễn Ngọc Yến', classId: 'c-9a1', gender: 'Nữ', status: 'Đang học', note: 'Ghi chép bài học ngữ pháp cẩn thận, chu đáo' }
];

export const initialLessons: Lesson[] = [
  {
    id: 'l-01',
    title: 'Unit 1: Life at School - Vocabulary & Present Simple Tense',
    classId: 'c-6a1',
    topic: 'Chủ đề: My New School',
    objectives: 'Nắm vững từ vựng về trường lớp; sử dụng thành thạo thì Hiện tại đơn trong giao tiếp hàng ngày.',
    summary: 'Cấu trúc câu khẳng định, phủ định, nghi vấn với thì Hiện tại đơn; thực hành phát âm âm /ɪ/ và /i:/.',
    teachDate: '2026-09-18',
    status: 'Đang dạy'
  },
  {
    id: 'l-02',
    title: 'Unit 2: My Friends - Writing a descriptive paragraph',
    classId: 'c-6a1',
    topic: 'Chủ đề: My Friends and Hobbies',
    objectives: 'Sử dụng các tính từ chỉ tính cách, ngoại hình để viết đoạn văn mô tả người bạn thân.',
    summary: 'Lập dàn ý đoạn văn mô tả, cách liên kết ý bằng liên từ and, but, because.',
    teachDate: '2026-09-22',
    status: 'Chưa dạy'
  },
  {
    id: 'l-03',
    title: 'Unit 3: Community Service - Past Simple Tense & Pronunciation',
    classId: 'c-7a1',
    topic: 'Chủ đề: Helping Our Community',
    objectives: 'Sử dụng động từ có quy tắc và bất quy tắc thì Quá khứ đơn; luyện phát âm đuôi -ed (/t/, /d/, /ɪd/).',
    summary: 'Quy tắc phát âm đuôi -ed; thực hành chia động từ quá khứ qua câu chuyện ngắn.',
    teachDate: '2026-09-17',
    status: 'Đã hoàn thành'
  },
  {
    id: 'l-04',
    title: 'Unit 4: Music and Arts - Speaking & Discussion Skills',
    classId: 'c-7a1',
    topic: 'Chủ đề: Arts and Music',
    objectives: 'Thuyết trình ngắn về sở thích âm nhạc nghệ thuật; sử dụng cấu trúc so sánh as...as, different from.',
    summary: 'Chuẩn bị bài nói 3 phút, luyện phản xạ hỏi - đáp theo nhóm.',
    teachDate: '2026-09-19',
    status: 'Đang dạy'
  },
  {
    id: 'l-05',
    title: 'Unit 5: Natural Wonders - Reading Comprehension & Superlatives',
    classId: 'c-8a1',
    topic: 'Chủ đề: Our Wonderful World',
    objectives: 'Kỹ năng đọc lướt (skimming) và đọc quét (scanning); sử dụng câu so sánh nhất với tính từ ngắn và dài.',
    summary: 'Đọc hiểu văn bản về danh lam thắng cảnh Việt Nam; trả lời câu hỏi chi tiết.',
    teachDate: '2026-09-18',
    status: 'Đang dạy'
  },
  {
    id: 'l-06',
    title: 'Unit 6: English in the World - Conditional Sentences (Type 1 & 2)',
    classId: 'c-9a1',
    topic: 'Chủ đề: Global Language',
    objectives: 'Phân biệt và sử dụng đúng câu điều kiện loại 1 và loại 2; áp dụng vào bài viết luận ngắn.',
    summary: 'Công thức If-clause, bài tập chuyển đổi câu và thực hành đặt câu theo tình huống.',
    teachDate: '2026-09-16',
    status: 'Đã hoàn thành'
  },
  {
    id: 'l-07',
    title: 'Ôn tập tổng hợp Ngữ pháp & Từ vựng Tiếng Anh thi vào lớp 10',
    classId: 'c-9a1',
    topic: 'Chuyên đề: Ôn thi vào 10 môn Tiếng Anh',
    objectives: 'Hệ thống hóa các chuyên đề ngữ pháp trọng tâm: các thì, câu bị động, mệnh đề quan hệ, câu gián tiếp.',
    summary: 'Luyện giải bộ đề thi thử trắc nghiệm 50 câu và phân tích các bẫy thường gặp.',
    teachDate: '2026-09-25',
    status: 'Chưa dạy'
  }
];

export const initialTasks: LearningTask[] = [
  {
    id: 't-01',
    title: 'Học thuộc 15 từ vựng Unit 1 và đặt câu ví dụ',
    classId: 'c-6a1',
    lessonId: 'l-01',
    description: 'Ghi nhớ nghĩa và cách phát âm, đặt 5 câu hoàn chỉnh sử dụng thì Hiện tại đơn.',
    dueDate: '2026-09-19',
    priority: 'Bình thường',
    status: 'Đang thực hiện',
    completedStudentIds: ['s-601', 's-602', 's-604', 's-606']
  },
  {
    id: 't-02',
    title: 'Viết đoạn văn ngắn 50-70 từ mô tả về người bạn thân',
    classId: 'c-6a1',
    lessonId: 'l-01',
    description: 'Sử dụng ít nhất 4 tính từ chỉ tính cách, ngoại hình và kiểm tra kỹ lỗi chính tả từ vựng.',
    dueDate: '2026-09-20',
    priority: 'Quan trọng',
    status: 'Đã giao',
    completedStudentIds: ['s-602', 's-604']
  },
  {
    id: 't-03',
    title: 'Chuẩn bị bài nói thuyết trình tiếng Anh 3 phút',
    classId: 'c-7a1',
    lessonId: 'l-04',
    description: 'Chọn chủ đề: My Favorite Music hoặc A Famous Artist, chuẩn bị dàn ý và từ khóa chính.',
    dueDate: '2026-09-19',
    priority: 'Quan trọng',
    status: 'Đang thực hiện',
    completedStudentIds: ['s-701', 's-702', 's-704', 's-705']
  },
  {
    id: 't-04',
    title: 'Hoàn thành bài tập trắc nghiệm so sánh hơn và so sánh nhất',
    classId: 'c-8a1',
    lessonId: 'l-05',
    description: 'Làm phiếu bài tập 20 câu trắc nghiệm trên giấy hoặc ghi đáp án vào vở bài tập.',
    dueDate: '2026-09-21',
    priority: 'Khẩn cấp',
    status: 'Đã giao',
    completedStudentIds: ['s-801', 's-802', 's-804']
  },
  {
    id: 't-05',
    title: 'Sơ đồ tư duy ngữ pháp: Câu điều kiện loại 1 và loại 2',
    classId: 'c-9a1',
    lessonId: 'l-06',
    description: 'Vẽ sơ đồ tư duy tóm tắt công thức, cách dùng và lấy 2 ví dụ minh họa cho mỗi loại câu điều kiện.',
    dueDate: '2026-09-18',
    priority: 'Quan trọng',
    status: 'Đã hoàn thành',
    completedStudentIds: ['s-901', 's-902', 's-903', 's-904', 's-905']
  },
  {
    id: 't-06',
    title: 'Luyện giải đề thi thử Tiếng Anh vào 10 (Đề số 01)',
    classId: 'c-9a1',
    lessonId: 'l-07',
    description: 'Làm phần Ngữ âm, Ngữ pháp và Đọc hiểu, ghi chú các câu hỏi còn phân vân để chữa trên lớp.',
    dueDate: '2026-09-24',
    priority: 'Bình thường',
    status: 'Chưa giao',
    completedStudentIds: []
  }
];

export const initialGrades: GradeEntry[] = [
  // Lớp 6A1
  { id: 'g-01', studentId: 's-601', classId: 'c-6a1', activityTitle: 'Kiểm tra 15 phút: Từ vựng & Hiện tại đơn', score: 8.5, date: '2026-09-15', note: 'Phát âm chuẩn, chia động từ chính xác' },
  { id: 'g-02', studentId: 's-602', classId: 'c-6a1', activityTitle: 'Kiểm tra 15 phút: Từ vựng & Hiện tại đơn', score: 9.0, date: '2026-09-15', note: 'Từ vựng đa dạng, bài làm cẩn thận' },
  { id: 'g-03', studentId: 's-603', classId: 'c-6a1', activityTitle: 'Kiểm tra 15 phút: Từ vựng & Hiện tại đơn', score: 6.0, date: '2026-09-15', note: 'Cần chú ý thêm đuôi -s/es ở ngôi thứ 3 số ít' },
  { id: 'g-04', studentId: 's-604', classId: 'c-6a1', activityTitle: 'Kiểm tra 15 phút: Từ vựng & Hiện tại đơn', score: 8.0, date: '2026-09-15', note: 'Nắm chắc kiến thức cơ bản' },
  { id: 'g-05', studentId: 's-605', classId: 'c-6a1', activityTitle: 'Kiểm tra 15 phút: Từ vựng & Hiện tại đơn', score: 5.5, date: '2026-09-15', note: 'Cần chú ý cẩn thận khi đọc yêu cầu đề' },
  { id: 'g-06', studentId: 's-606', classId: 'c-6a1', activityTitle: 'Kiểm tra 15 phút: Từ vựng & Hiện tại đơn', score: 8.5, date: '2026-09-15', note: 'Đặt câu đúng ngữ pháp, diễn đạt tự nhiên' },

  // Lớp 7A1
  { id: 'g-07', studentId: 's-701', classId: 'c-7a1', activityTitle: 'Bài kiểm tra kỹ năng Nói (Speaking Test)', score: 8.0, date: '2026-09-14', note: 'Phản xạ nhanh, ngữ điệu tốt' },
  { id: 'g-08', studentId: 's-702', classId: 'c-7a1', activityTitle: 'Bài kiểm tra kỹ năng Nói (Speaking Test)', score: 8.5, date: '2026-09-14', note: 'Tự tin, phát âm rõ ràng' },
  { id: 'g-09', studentId: 's-703', classId: 'c-7a1', activityTitle: 'Bài kiểm tra kỹ năng Nói (Speaking Test)', score: 6.0, date: '2026-09-14', note: 'Cần mở rộng thêm ý trả lời, tránh nói quá ngắn' },
  { id: 'g-10', studentId: 's-704', classId: 'c-7a1', activityTitle: 'Bài kiểm tra kỹ năng Nói (Speaking Test)', score: 9.0, date: '2026-09-14', note: 'Vốn từ phong phú, biểu cảm tự nhiên' },
  { id: 'g-11', studentId: 's-705', classId: 'c-7a1', activityTitle: 'Bài kiểm tra kỹ năng Nói (Speaking Test)', score: 7.5, date: '2026-09-14', note: 'Bài nói đúng trọng tâm' },

  // Lớp 8A1
  { id: 'g-12', studentId: 's-801', classId: 'c-8a1', activityTitle: 'Kiểm tra Đọc hiểu & So sánh tính từ', score: 8.5, date: '2026-09-16', note: 'Làm bài nhanh và chính xác' },
  { id: 'g-13', studentId: 's-802', classId: 'c-8a1', activityTitle: 'Kiểm tra Đọc hiểu & So sánh tính từ', score: 8.5, date: '2026-09-16', note: 'Phân tích câu hỏi đọc hiểu tốt' },
  { id: 'g-14', studentId: 's-803', classId: 'c-8a1', activityTitle: 'Kiểm tra Đọc hiểu & So sánh tính từ', score: 7.0, date: '2026-09-16', note: 'Cần phân biệt kỹ hơn tính từ ngắn và tính từ dài' },
  { id: 'g-15', studentId: 's-804', classId: 'c-8a1', activityTitle: 'Kiểm tra Đọc hiểu & So sánh tính từ', score: 9.0, date: '2026-09-16', note: 'Đạt điểm tuyệt đối phần đọc hiểu' },
  { id: 'g-16', studentId: 's-805', classId: 'c-8a1', activityTitle: 'Kiểm tra Đọc hiểu & So sánh tính từ', score: 7.5, date: '2026-09-16', note: 'Có cố gắng, cải thiện rõ rệt' },

  // Lớp 9A1
  { id: 'g-17', studentId: 's-901', classId: 'c-9a1', activityTitle: 'Kiểm tra 1 tiết (45 phút) Chuyên đề vào 10', score: 9.5, date: '2026-09-17', note: 'Làm chủ toàn bộ kiến thức ngữ pháp và từ vựng' },
  { id: 'g-18', studentId: 's-902', classId: 'c-9a1', activityTitle: 'Kiểm tra 1 tiết (45 phút) Chuyên đề vào 10', score: 6.5, date: '2026-09-17', note: 'Cần rèn luyện thêm dạng bài biến đổi câu và giới từ' },
  { id: 'g-19', studentId: 's-903', classId: 'c-9a1', activityTitle: 'Kiểm tra 1 tiết (45 phút) Chuyên đề vào 10', score: 9.0, date: '2026-09-17', note: 'Kỹ năng làm bài trắc nghiệm rất tốt' },
  { id: 'g-20', studentId: 's-904', classId: 'c-9a1', activityTitle: 'Kiểm tra 1 tiết (45 phút) Chuyên đề vào 10', score: 8.0, date: '2026-09-17', note: 'Bài làm mạch lạc, đúng yêu cầu' },
  { id: 'g-21', studentId: 's-905', classId: 'c-9a1', activityTitle: 'Kiểm tra 1 tiết (45 phút) Chuyên đề vào 10', score: 8.5, date: '2026-09-17', note: 'Trình bày sạch sẽ, đạt chuẩn kiến thức' }
];

export const initialComments: StudentComment[] = [
  {
    id: 'cm-01',
    studentId: 's-601',
    classId: 'c-6a1',
    date: '2026-09-16',
    content: 'Phát âm tiếng Anh rất chuẩn, ngữ điệu tự nhiên, phản xạ trả lời câu hỏi nhanh.',
    skillCategory: 'Nói & Nghe',
    note: 'Đề xuất cử tham gia câu lạc bộ Tiếng Anh của trường'
  },
  {
    id: 'cm-02',
    studentId: 's-603',
    classId: 'c-6a1',
    date: '2026-09-17',
    content: 'Em nắm được từ vựng nhưng tốc độ làm bài còn chậm, đôi chỗ nhầm lẫn mạo từ a/an/the.',
    skillCategory: 'Viết bài',
    note: 'Cô đã nhắc nhở ngồi gần bàn đầu để quan sát bảng và luyện tập thêm'
  },
  {
    id: 'cm-03',
    studentId: 's-704',
    classId: 'c-7a1',
    date: '2026-09-15',
    content: 'Thuyết trình tiếng Anh tự tin, phát âm đuôi -s/es rõ ràng, slide chuẩn bị đẹp mắt.',
    skillCategory: 'Nói & Nghe',
    note: 'Khen ngợi trước lớp để khích lệ tinh thần'
  },
  {
    id: 'cm-04',
    studentId: 's-801',
    classId: 'c-8a1',
    date: '2026-09-16',
    content: 'Khả năng đọc hiểu bài đọc dài rất tốt, đoán nghĩa từ mới qua ngữ cảnh chính xác.',
    skillCategory: 'Đọc hiểu',
    note: 'Nên khuyến khích đọc thêm truyện song ngữ tiếng Anh'
  },
  {
    id: 'cm-05',
    studentId: 's-902',
    classId: 'c-9a1',
    date: '2026-09-17',
    content: 'Cần dành thêm thời gian luyện kỹ năng viết câu gián tiếp và mệnh đề quan hệ.',
    skillCategory: 'Viết bài',
    note: 'Cô đã phát thêm phiếu bài tập củng cố trong giờ phụ đạo'
  }
];

export const initialActivityLogs: ActivityLog[] = [
  { id: 'act-01', timestamp: new Date(Date.now() - 1000 * 60 * 35).toISOString(), type: 'grade', action: 'Đã cập nhật điểm bài "Kiểm tra 1 tiết Chuyên đề vào 10" lớp 9A1' },
  { id: 'act-02', timestamp: new Date(Date.now() - 1000 * 60 * 120).toISOString(), type: 'task', action: 'Đã giao nhiệm vụ mới: "Ôn tập câu điều kiện" cho lớp 9A1' },
  { id: 'act-03', timestamp: new Date(Date.now() - 1000 * 60 * 240).toISOString(), type: 'lesson', action: 'Đã cập nhật trạng thái bài học Unit 1 tiếng Anh lớp 6A1 sang "Đang dạy"' },
  { id: 'act-04', timestamp: new Date(Date.now() - 1000 * 60 * 360).toISOString(), type: 'comment', action: 'Đã thêm nhận xét rèn luyện kỹ năng cho học sinh Lê Minh Đức' },
  { id: 'act-05', timestamp: new Date(Date.now() - 1000 * 60 * 500).toISOString(), type: 'student', action: 'Đã kiểm tra và đồng bộ danh sách học sinh bộ môn Anh văn' }
];

export const initialAppData: AppData = {
  classes: initialClasses,
  students: initialStudents,
  lessons: initialLessons,
  tasks: initialTasks,
  grades: initialGrades,
  comments: initialComments,
  activityLogs: initialActivityLogs,
  soundEnabled: false
};
