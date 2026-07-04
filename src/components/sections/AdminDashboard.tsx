import React, { useEffect, useState } from 'react';
import { RefreshCw, Phone, Cat, ShoppingBag, Eye, Calendar } from 'lucide-react';
import { Card } from '../ui/Card';

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
  cats_count: string;
  cart_items: CartItem[];
  created_at: string;
}

export const AdminDashboard: React.FC = () => {
  const [data, setData] = useState<Consultation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedConsult, setSelectedConsult] = useState<Consultation | null>(null);

  const fetchConsultations = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/consultations');
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
  }, []);

  return (
    <div className="min-h-screen bg-[#0f1322] text-slate-100 p-6 sm:p-10 font-sans">
      
      {/* Header */}
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6 mb-8">
        <div>
          <h1 className="text-3xl font-black font-display text-white tracking-tight flex items-center gap-2">
            HeliPet Admin
            <span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full font-mono uppercase font-bold tracking-widest">
              Live
            </span>
          </h1>
          <p className="text-sm text-slate-400 mt-1">Danh sách đăng ký tư vấn và giỏ hàng của khách hàng</p>
        </div>

        <button
          onClick={fetchConsultations}
          disabled={isLoading}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 active:scale-95 transition text-xs font-bold font-mono disabled:opacity-50"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
          Tải Lại Dữ Liệu
        </button>
      </div>

      {/* Main Grid Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Consultation List Table (7 columns) */}
        <div className="lg:col-span-8 space-y-4">
          <Card hoverEffect={false} className="bg-[#151a30] border border-slate-800/80 p-6 rounded-3xl overflow-x-auto shadow-2xl">
            <h2 className="text-lg font-bold text-white font-display mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-brand-teal" />
              Lịch sử Đăng ký ({data.length})
            </h2>

            {isLoading ? (
              <div className="py-16 text-center text-slate-400 flex flex-col items-center gap-3">
                <RefreshCw className="w-8 h-8 animate-spin text-brand-teal" />
                <span className="text-sm font-mono">Đang nạp dữ liệu từ database...</span>
              </div>
            ) : error ? (
              <div className="py-12 text-center text-red-400 border border-red-500/10 bg-red-500/5 rounded-2xl">
                {error}
              </div>
            ) : data.length === 0 ? (
              <div className="py-16 text-center text-slate-500 text-sm">
                Chưa có lượt đăng ký tư vấn nào.
              </div>
            ) : (
              <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 font-mono text-[11px] uppercase tracking-wider">
                    <th className="pb-3 pl-2">Khách hàng</th>
                    <th className="pb-3">Liên hệ</th>
                    <th className="pb-3 text-center">Số mèo</th>
                    <th className="pb-3 text-center">Giỏ hàng</th>
                    <th className="pb-3 pr-2 text-right">Hành động</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {data.map((item) => (
                    <tr 
                      key={item.id} 
                      className={`hover:bg-slate-800/30 transition ${
                        selectedConsult?.id === item.id ? 'bg-brand-teal/5' : ''
                      }`}
                    >
                      <td className="py-4 pl-2 font-bold text-white font-display">
                        {item.name}
                        <span className="block text-[10px] text-slate-500 font-mono font-normal mt-0.5">
                          {new Date(item.created_at).toLocaleString('vi-VN')}
                        </span>
                      </td>
                      <td className="py-4 font-mono text-slate-300">
                        <span className="flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-slate-500" />
                          {item.phone}
                        </span>
                      </td>
                      <td className="py-4 text-center">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 text-xs font-mono">
                          <Cat className="w-3 h-3 text-brand-yellow" />
                          {item.cats_count}
                        </span>
                      </td>
                      <td className="py-4 text-center">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-brand-teal/10 text-brand-teal text-xs font-mono font-bold">
                          <ShoppingBag className="w-3 h-3" />
                          {item.cart_items?.length || 0}
                        </span>
                      </td>
                      <td className="py-4 text-right pr-2">
                        <button
                          onClick={() => setSelectedConsult(item)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-teal/10 hover:bg-brand-teal text-brand-teal hover:text-white font-bold text-xs transition duration-200"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          Xem Giỏ
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </Card>
        </div>

        {/* Right: Selected Cart Details Panel (4 columns) */}
        <div className="lg:col-span-4">
          <Card hoverEffect={false} className="bg-[#151a30] border border-slate-800/80 p-6 rounded-3xl shadow-2xl min-h-[300px]">
            <h2 className="text-lg font-bold text-white font-display mb-6 flex items-center gap-2 border-b border-slate-800 pb-3">
              <ShoppingBag className="w-5 h-5 text-brand-teal" />
              Chi tiết giỏ hàng
            </h2>

            {!selectedConsult ? (
              <div className="py-20 text-center text-slate-500 text-sm flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-slate-800/50 flex items-center justify-center text-slate-400">
                  <Eye className="w-6 h-6" />
                </div>
                <span>Chọn một khách hàng ở danh sách để xem chi tiết giỏ hàng</span>
              </div>
            ) : (
              <div className="space-y-6">
                
                {/* Customer info preview */}
                <div className="p-4 bg-slate-800/30 rounded-2xl border border-slate-800">
                  <h3 className="text-sm font-bold text-white font-display mb-2">{selectedConsult.name}</h3>
                  <div className="space-y-1.5 text-xs text-slate-400 font-mono">
                    <p className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-slate-500" />
                      SĐT: {selectedConsult.phone}
                    </p>
                    <p className="flex items-center gap-2">
                      <Cat className="w-3.5 h-3.5 text-slate-500" />
                      Nuôi: {selectedConsult.cats_count} bé mèo
                    </p>
                  </div>
                </div>

                {/* Cart items list */}
                <div className="space-y-3">
                  <span className="text-[10px] uppercase tracking-wider font-mono font-bold text-slate-500 block">
                    Danh sách sản phẩm
                  </span>

                  {!selectedConsult.cart_items || selectedConsult.cart_items.length === 0 ? (
                    <p className="text-xs text-slate-500 italic py-4 text-center">
                      Giỏ hàng trống khi đăng ký tư vấn
                    </p>
                  ) : (
                    <div className="divide-y divide-slate-800/60 max-h-[250px] overflow-y-auto pr-1">
                      {selectedConsult.cart_items.map((item) => (
                        <div key={item.id} className="py-3 flex justify-between items-center gap-3">
                          <div className="min-w-0">
                            <p className="text-xs font-bold text-white font-display truncate">{item.name}</p>
                            <p className="text-[10px] text-slate-500 font-mono mt-0.5">
                              {item.variant || 'Standard'} x{item.quantity}
                            </p>
                          </div>
                          <span className="text-xs font-mono font-bold text-brand-teal shrink-0">
                            {((item.price || 0) * item.quantity).toLocaleString('vi-VN')}đ
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Cart total */}
                {selectedConsult.cart_items && selectedConsult.cart_items.length > 0 && (
                  <div className="border-t border-slate-800 pt-4 flex justify-between items-center">
                    <span className="text-xs font-mono text-slate-400 font-bold">Tổng đơn giá:</span>
                    <span className="text-lg font-black font-display text-brand-yellow">
                      {selectedConsult.cart_items.reduce((acc, item) => acc + (item.price || 0) * item.quantity, 0).toLocaleString('vi-VN')}đ
                    </span>
                  </div>
                )}

              </div>
            )}
          </Card>
        </div>

      </div>

    </div>
  );
};
