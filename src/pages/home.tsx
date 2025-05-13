import {
  useGetPostsQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} from '../features/apiSlice';

function Home() {
  const { data: posts, isLoading, error } = useGetPostsQuery();
  const [addPost] = useAddPostMutation();
  const [updatePost] = useUpdatePostMutation();
  const [deletePost] = useDeletePostMutation();

  const handleAdd = async () => {
    try {
      await addPost({
        title: 'عنوان جديد',
        body: 'محتوى البوست',
        userId: 1,
      }).unwrap();  // unwrap للتحقق من الاستجابة
    } catch (err) {
      console.error("خطأ في إضافة البوست: ", err);
    }
  };

  const handleUpdate = async () => {
    try {
      await updatePost({
        id: 1,
        data: { title: 'عنوان تم تعديله' },
      }).unwrap();  // unwrap للتحقق من الاستجابة
    } catch (err) {
      console.error("خطأ في تعديل البوست: ", err);
    }
  };

  const handleDelete = async () => {
    try {
      await deletePost(1).unwrap();  // unwrap للتحقق من الاستجابة
    } catch (err) {
      console.error("خطأ في حذف البوست: ", err);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-center text-indigo-600 mb-6">إدارة المنشورات</h1>
      <div className="flex justify-center space-x-4 mb-6">
        <button 
          onClick={handleAdd} 
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200"
        >
          إضافة بوست
        </button>
        <button 
          onClick={handleUpdate} 
          className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-200"
        >
          تحديث بوست
        </button>
        <button 
          onClick={handleDelete} 
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-200"
        >
          حذف بوست
        </button>
      </div>

      {isLoading ? (
        <div className="text-center text-lg text-gray-700">جاري التحميل...</div>
      ) : error ? (
        <div className="text-center text-lg text-red-600">حدث خطأ في تحميل البيانات</div>
      ) : (
        <div>
          {posts?.map((post) => (
            <div key={post.id} className="my-4 p-4 bg-white shadow-lg rounded-lg border border-gray-200">
              <h2 className="font-semibold text-xl text-indigo-600 mb-2">{post.title}</h2>
              <p className="text-gray-700">{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
