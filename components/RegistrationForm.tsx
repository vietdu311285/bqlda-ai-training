"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";

type FormState = "idle" | "loading" | "success";

const units = [
  "Ban Quản lý Dự án",
  "Bộ phận Chuyển đổi số",
  "Bộ phận Kỹ thuật",
  "Bộ phận Kế hoạch",
  "Bộ phận Kinh doanh",
  "Khác",
];

export default function RegistrationForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [values, setValues] = useState({
    fullName: "",
    unit: "",
    email: "",
    phone: "",
    mode: "offline",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((e) => ({ ...e, [name]: "" }));
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!values.fullName.trim()) errs.fullName = "Vui lòng nhập họ và tên";
    if (!values.unit) errs.unit = "Vui lòng chọn đơn vị";
    if (!values.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      errs.email = "Vui lòng nhập email hợp lệ";
    if (!values.phone.trim() || !/^[0-9]{9,11}$/.test(values.phone.replace(/\./g, "")))
      errs.phone = "Vui lòng nhập số điện thoại hợp lệ";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setFormState("loading");
    await new Promise((r) => setTimeout(r, 1500));
    setFormState("success");
  };

  return (
    <section
      className="section-padding bg-brand-gray4"
      aria-labelledby="form-heading"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-5 h-px bg-viettel-red" aria-hidden />
            <span className="text-xs font-semibold tracking-[0.2em] text-viettel-red uppercase">
              Đăng ký
            </span>
            <span className="w-5 h-px bg-viettel-red" aria-hidden />
          </div>
          <h2
            id="form-heading"
            className="text-3xl lg:text-4xl font-extrabold text-brand-black mb-3"
          >
            Đăng ký tham gia khóa học
          </h2>
          <p className="text-brand-gray1 text-sm">
            Điền thông tin dưới đây để đăng ký.{" "}
            <strong className="text-viettel-red">Hạn đăng ký: 15/05/2026.</strong>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-enterprise border border-brand-gray4 overflow-hidden"
        >
          {formState === "success" ? (
            <div className="p-10 text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-brand-black mb-3">
                Đăng ký thành công!
              </h3>
              <p className="text-brand-gray1 text-sm leading-relaxed max-w-sm mx-auto">
                Cảm ơn bạn đã đăng ký. Chúng tôi sẽ liên hệ xác nhận qua email
                trong vòng 24 giờ. Hẹn gặp bạn vào{" "}
                <strong>Thứ 7, 16/05/2026 lúc 8:30</strong>.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              aria-label="Form đăng ký khóa học AI"
              className="p-8 space-y-6"
            >
              {/* Full name */}
              <FormField
                label="Họ và tên"
                id="fullName"
                required
                error={errors.fullName}
              >
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={values.fullName}
                  onChange={handleChange}
                  placeholder="Nguyễn Văn A"
                  autoComplete="name"
                  className={inputClass(!!errors.fullName)}
                  aria-describedby={errors.fullName ? "fullName-error" : undefined}
                  aria-invalid={!!errors.fullName}
                />
                {errors.fullName && (
                  <p id="fullName-error" className={errorClass}>
                    {errors.fullName}
                  </p>
                )}
              </FormField>

              {/* Unit */}
              <FormField
                label="Đơn vị"
                id="unit"
                required
                error={errors.unit}
              >
                <select
                  id="unit"
                  name="unit"
                  value={values.unit}
                  onChange={handleChange}
                  className={inputClass(!!errors.unit)}
                  aria-describedby={errors.unit ? "unit-error" : undefined}
                  aria-invalid={!!errors.unit}
                >
                  <option value="" disabled>
                    Chọn đơn vị công tác
                  </option>
                  {units.map((u) => (
                    <option key={u} value={u}>
                      {u}
                    </option>
                  ))}
                </select>
                {errors.unit && (
                  <p id="unit-error" className={errorClass}>
                    {errors.unit}
                  </p>
                )}
              </FormField>

              {/* Email + Phone */}
              <div className="grid sm:grid-cols-2 gap-5">
                <FormField
                  label="Email công ty"
                  id="email"
                  required
                  error={errors.email}
                >
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="ten@viettel.com.vn"
                    autoComplete="email"
                    className={inputClass(!!errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p id="email-error" className={errorClass}>
                      {errors.email}
                    </p>
                  )}
                </FormField>

                <FormField
                  label="Số điện thoại"
                  id="phone"
                  required
                  error={errors.phone}
                >
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={values.phone}
                    onChange={handleChange}
                    placeholder="0966.666.568"
                    autoComplete="tel"
                    className={inputClass(!!errors.phone)}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    aria-invalid={!!errors.phone}
                  />
                  {errors.phone && (
                    <p id="phone-error" className={errorClass}>
                      {errors.phone}
                    </p>
                  )}
                </FormField>
              </div>

              {/* Mode */}
              <div>
                <fieldset>
                  <legend className="block text-sm font-semibold text-brand-dark mb-3">
                    Hình thức tham gia{" "}
                    <span className="text-viettel-red">*</span>
                  </legend>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      { value: "offline", label: "Offline", sub: "Tòa nhà Thái Bình" },
                      { value: "zoom", label: "Online — Zoom", sub: "Link Zoom gửi qua email" },
                    ].map((opt) => (
                      <label
                        key={opt.value}
                        className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                          values.mode === opt.value
                            ? "border-viettel-red bg-red-50"
                            : "border-brand-gray3 bg-white hover:border-brand-gray2"
                        }`}
                      >
                        <input
                          type="radio"
                          name="mode"
                          value={opt.value}
                          checked={values.mode === opt.value}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div
                          className={`w-4 h-4 rounded-full border-2 mt-0.5 flex-shrink-0 transition-colors ${
                            values.mode === opt.value
                              ? "border-viettel-red bg-viettel-red"
                              : "border-brand-gray3"
                          }`}
                          aria-hidden
                        >
                          {values.mode === opt.value && (
                            <div className="w-2 h-2 rounded-full bg-white m-auto mt-[2px]" />
                          )}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-brand-black">
                            {opt.label}
                          </div>
                          <div className="text-xs text-brand-gray2 mt-0.5">{opt.sub}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </fieldset>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={formState === "loading"}
                className="w-full py-4 bg-viettel-red hover:bg-viettel-red-dark disabled:opacity-60 text-white font-bold text-base rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                {formState === "loading" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" aria-hidden />
                    Đang xử lý...
                  </>
                ) : (
                  "Đăng ký tham gia"
                )}
              </button>

              <p className="text-xs text-center text-brand-gray2">
                Thông tin của bạn được bảo mật và chỉ dùng cho mục đích đào tạo nội bộ.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

const inputClass = (hasError: boolean) =>
  `w-full px-4 py-3.5 text-sm text-brand-dark bg-brand-gray4 border rounded-xl outline-none transition-all duration-200 appearance-none ${
    hasError
      ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
      : "border-brand-gray3 focus:border-viettel-red focus:ring-2 focus:ring-viettel-red/20 hover:border-brand-gray2"
  }`;

const errorClass = "mt-1.5 text-xs text-red-500";

function FormField({
  label,
  id,
  required,
  error,
  children,
}: {
  label: string;
  id: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-brand-dark mb-2"
      >
        {label}
        {required && (
          <span className="text-viettel-red ml-1" aria-hidden>
            *
          </span>
        )}
      </label>
      {children}
    </div>
  );
}
