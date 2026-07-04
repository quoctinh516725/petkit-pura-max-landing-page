import React, { useEffect, useState } from 'react';
import { RefreshCw, Phone, Cat, ShoppingBag, Eye, Calendar, Search, DollarSign, TrendingUp, User, X } from 'lucide-react';
import { io } from 'socket.io-client';
import { Card } from '../ui/Card';
import { Toast } from '../ui/Toast';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  variant?: string;
}

interface Consultation {
  id: string;
  name: string;
  phone: string;
  catsCount: string;
  cartItems: CartItem[];
  createdAt: string;
}

export const AdminDashboard: React.FC = () => {
  const [data, setData] = useState<Consultation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedConsult, setSelectedConsult] = useState<Consultation | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Highlight new entry
  const [activeNewId, setActiveNewId] = useState<string | null>(null);

  // Toast state
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVariant, setToastVariant] = useState<'success' | 'error' | 'info'>('success');

  const showToast = (message: string, variant: 'success' | 'error' | 'info') => {
    setToastMessage(message);
    setToastVariant(variant);
    setToastVisible(true);
  };

  const fetchConsultations = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const apiUrl = import.meta.env.VITE_API_URL || '';
      const response = await fetch(`${apiUrl}/api/consultations`);
      if (!response.ok) {
        throw new Error('Lỗi fetch dữ liệu: ' + response.statusText);
      }
      const json = await response.json();
      setData(json);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Có lỗi xảy ra khi lấy dữ liệu.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchConsultations();

    // Connect to Socket.io
    const apiUrl = import.meta.env.VITE_API_URL || '';
    const socket = io(apiUrl || undefined);

    socket.on('connect', () => {
      console.log('Admin connected to WebSocket server');
    });

    socket.on('newConsultation', (newConsult: Consultation) => {
      console.log('Received new consultation:', newConsult);
      
      // Add to data list
      setData(prev => [newConsult, ...prev]);
      
      // Highlight the new row
      setActiveNewId(newConsult.id);
      setTimeout(() => {
        setActiveNewId(null);
      }, 5000);

      // Trigger Toast notification
      showToast(`Khách hàng ${newConsult.name} (${newConsult.phone}) vừa đăng ký tư vấn!`, 'success');
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  // Filter logic
  const filteredData = data.filter(item => {
    const nameMatch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const phoneMatch = item.phone.includes(searchQuery);
    return nameMatch || phoneMatch;
  });

  // Calculate statistics
  const totalConsultations = data.length;
  const totalCats = data.reduce((acc, item) => acc + (parseInt(item.catsCount) || 0), 0);
  const estRevenue = data.reduce((acc, item) => {
    const cartSum = item.cartItems?.reduce((cAcc, cItem) => cAcc + (cItem.price || 0) * cItem.quantity, 0) || 0;
    return acc + cartSum;
  }, 0);
  const avgCartSize = totalConsultations > 0 ? Math.round(estRevenue / totalConsultations) : 0;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-6 sm:p-10 font-sans relative overflow-hidden">
      {/* Decorative subtle mesh backgrounds */}
      <div className="absolute top-0 left-0 right-0 h-[400px] bg-gradient-to-b from-teal-500/5 to-transparent pointer-events-none" />
      <div className="absolute -top-[30%] -right-[10%] w-[50%] h-[50%] rounded-full bg-teal-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 pb-6 mb-8">
          <div>
            <h1 className="text-3xl font-black font-display text-slate-900 tracking-tight flex items-center gap-2">
              HeliPet Admin
              <span className="text-xs bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 px-2 py-0.5 rounded-full font-mono uppercase font-bold tracking-widest">
                Live
              </span>
            </h1>
            <p className="text-sm text-slate-500 mt-1">Hệ thống quản lý thông tin tư vấn và giỏ hàng của khách hàng</p>
          </div>

          <button
            onClick={fetchConsultations}
            disabled={isLoading}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 active:scale-95 border border-slate-200 text-slate-700 shadow-sm transition text-xs font-bold font-mono disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
            Tải Lại Dữ Liệu
          </button>
        </div>

        {/* Stats/Metrics Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600">
              <User className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-medium text-slate-400 uppercase tracking-wider font-mono">Đăng ký</p>
              <h3 className="text-2xl font-black text-slate-900 mt-0.5">{totalConsultations}</h3>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600">
              <Cat className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-medium text-slate-400 uppercase tracking-wider font-mono">Số mèo đăng ký</p>
              <h3 className="text-2xl font-black text-slate-900 mt-0.5">{totalCats}</h3>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
              <DollarSign className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-medium text-slate-400 uppercase tracking-wider font-mono">Tiềm năng đơn</p>
              <h3 className="text-xl font-black text-slate-900 mt-0.5">{estRevenue.toLocaleString('vi-VN')}đ</h3>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-medium text-slate-400 uppercase tracking-wider font-mono">Giá trị TB/Giỏ</p>
              <h3 className="text-xl font-black text-slate-900 mt-0.5">{avgCartSize.toLocaleString('vi-VN')}đ</h3>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="mb-6 max-w-md">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Tìm kiếm khách hàng bằng Tên hoặc SĐT..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-2.5 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 shadow-sm transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Consultation List Table (7 columns) */}
          <div className="lg:col-span-8 space-y-4">
            <Card hoverEffect={false} className="bg-white border border-slate-200/60 p-6 rounded-3xl overflow-x-auto shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 font-display mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-teal-600" />
                Lịch sử Đăng ký ({filteredData.length})
              </h2>

              {isLoading ? (
                <div className="py-16 text-center text-slate-500 flex flex-col items-center gap-3">
                  <RefreshCw className="w-8 h-8 animate-spin text-teal-600" />
                  <span className="text-sm font-mono">Đang nạp dữ liệu từ database...</span>
                </div>
              ) : error ? (
                <div className="py-12 text-center text-red-600 border border-red-500/10 bg-red-500/5 rounded-2xl">
                  {error}
                </div>
              ) : filteredData.length === 0 ? (
                <div className="py-16 text-center text-slate-400 text-sm">
                  {searchQuery ? 'Không tìm thấy kết quả phù hợp.' : 'Chưa có lượt đăng ký tư vấn nào.'}
                </div>
              ) : (
                <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                  <thead>
                    <tr className="border-b border-slate-100 text-slate-400 font-mono text-[11px] uppercase tracking-wider">
                      <th className="pb-3 pl-2">Khách hàng</th>
                      <th className="pb-3">Liên hệ</th>
                      <th className="pb-3 text-center">Số mèo</th>
                      <th className="pb-3 text-center">Giỏ hàng</th>
                      <th className="pb-3 pr-2 text-right">Hành động</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredData.map((item) => {
                      const isNewlyAdded = activeNewId === item.id;
                      return (
                        <tr 
                          key={item.id} 
                          className={`hover:bg-slate-50/80 cursor-pointer transition-all duration-500 ${
                            selectedConsult?.id === item.id ? 'bg-teal-500/5' : ''
                          } ${isNewlyAdded ? 'bg-emerald-100 ring-2 ring-emerald-500/35 animate-pulse' : ''}`}
                          onClick={() => setSelectedConsult(item)}
                        >
                          <td className="py-4 pl-2 font-bold text-slate-800 font-display">
                            {item.name}
                            <span className="block text-[10px] text-slate-400 font-mono font-normal mt-0.5">
                              {item.createdAt ? new Date(item.createdAt).toLocaleString('vi-VN') : ''}
                            </span>
                          </td>
                          <td className="py-4 font-mono text-slate-600">
                            <span className="flex items-center gap-1.5">
                              <Phone className="w-3.5 h-3.5 text-slate-400" />
                              {item.phone}
                            </span>
                          </td>
                          <td className="py-4 text-center">
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-xs font-mono">
                              <Cat className="w-3 h-3 text-amber-500" />
                              {item.catsCount} bé
                            </span>
                          </td>
                          <td className="py-4 text-center">
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-700 text-xs font-mono font-bold">
                              <ShoppingBag className="w-3 h-3 text-teal-600" />
                              {item.cartItems?.length || 0} SP
                            </span>
                          </td>
                          <td className="py-4 text-right pr-2" onClick={(e) => e.stopPropagation()}>
                            <button
                              onClick={() => setSelectedConsult(item)}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-50 hover:bg-teal-600 text-teal-700 hover:text-white font-bold text-xs transition duration-200"
                            >
                              <Eye className="w-3.5 h-3.5" />
                              Xem Giỏ
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </Card>
          </div>

          {/* Right: Selected Cart Details Panel (4 columns) */}
          <div className="lg:col-span-4">
            <Card hoverEffect={false} className="bg-white border border-slate-200/60 p-6 rounded-3xl shadow-sm min-h-[300px]">
              <h2 className="text-lg font-bold text-slate-900 font-display mb-6 flex items-center gap-2 border-b border-slate-100 pb-3">
                <ShoppingBag className="w-5 h-5 text-teal-600" />
                Chi tiết giỏ hàng
              </h2>

              {!selectedConsult ? (
                <div className="py-20 text-center text-slate-400 text-sm flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 border border-slate-100">
                    <Eye className="w-6 h-6" />
                  </div>
                  <span>Chọn một khách hàng ở danh sách để xem chi tiết giỏ hàng</span>
                </div>
              ) : (
                <div className="space-y-6">
                  
                  {/* Customer info preview */}
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <h3 className="text-sm font-bold text-slate-800 font-display mb-2">{selectedConsult.name}</h3>
                    <div className="space-y-2 text-xs text-slate-500 font-mono">
                      <p className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-slate-400" />
                        SĐT: <a href={`tel:${selectedConsult.phone}`} className="text-teal-600 font-bold hover:underline">{selectedConsult.phone}</a>
                      </p>
                      <p className="flex items-center gap-2">
                        <Cat className="w-3.5 h-3.5 text-slate-400" />
                        Nuôi: {selectedConsult.catsCount} bé mèo
                      </p>
                    </div>
                  </div>

                  {/* Cart items list */}
                  <div className="space-y-3">
                    <span className="text-[10px] uppercase tracking-wider font-mono font-bold text-slate-400 block">
                      Danh sách sản phẩm
                    </span>

                    {!selectedConsult.cartItems || selectedConsult.cartItems.length === 0 ? (
                      <p className="text-xs text-slate-400 italic py-4 text-center">
                        Giỏ hàng trống khi đăng ký tư vấn
                      </p>
                    ) : (
                      <div className="divide-y divide-slate-100 max-h-[250px] overflow-y-auto pr-1">
                        {selectedConsult.cartItems.map((item) => (
                          <div key={item.id} className="py-3 flex justify-between items-center gap-3">
                            <div className="min-w-0">
                              <p className="text-xs font-bold text-slate-800 font-display truncate">{item.name}</p>
                              <p className="text-[10px] text-slate-400 font-mono mt-0.5">
                                {item.variant || 'Tiêu chuẩn'} x{item.quantity}
                              </p>
                            </div>
                            <span className="text-xs font-mono font-bold text-slate-800 shrink-0">
                              {((item.price || 0) * item.quantity).toLocaleString('vi-VN')}đ
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Cart total */}
                  {selectedConsult.cartItems && selectedConsult.cartItems.length > 0 && (
                    <div className="border-t border-slate-100 pt-4 flex justify-between items-center">
                      <span className="text-xs font-mono text-slate-400 font-bold">Tổng đơn hàng:</span>
                      <span className="text-lg font-black font-display text-amber-600">
                        {selectedConsult.cartItems.reduce((acc, item) => acc + (item.price || 0) * item.quantity, 0).toLocaleString('vi-VN')}đ
                      </span>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="pt-2">
                    <a
                      href={`tel:${selectedConsult.phone}`}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs transition duration-200 shadow-sm shadow-teal-600/10 active:scale-98"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      Gọi điện tư vấn ngay
                    </a>
                  </div>

                </div>
              )}
            </Card>
          </div>

        </div>

      </div>

      {/* Real-time Toast Notifications */}
      <Toast 
        message={toastMessage}
        variant={toastVariant}
        isVisible={toastVisible}
        onClose={() => setToastVisible(false)}
      />
    </div>
  );
};
