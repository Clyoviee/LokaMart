import React, { useEffect, useState } from 'react';
import {
  DEFAULT_AVATAR_URL,
  DEFAULT_USER_PROFILE,
  LOKAMART_LOGO_URL,
  ScreenId,
  UserProfile,
} from '../data';
import { SafeImage } from './ShellComponents';

export interface RegisteredAccount extends UserProfile {
  password: string;
}

interface SplashScreenProps {
  onFinishSplash: () => void;
  onNavigate: (screen: ScreenId) => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({
  onFinishSplash,
  onNavigate,
}) => {
  const [progress, setProgress] = useState(12);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 8;
      });
    }, 150);

    const timer = setTimeout(() => {
      onFinishSplash();
    }, 2300);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onFinishSplash]);

  return (
    <div className="flex flex-col justify-between w-full min-h-[780px] @lg:min-h-[680px] flex-1 bg-gradient-to-b from-[#041B3C] via-[#132A4E] to-[#3B2314] text-white px-margin @md:px-10 py-8 @lg:py-12 relative overflow-hidden select-none">
      {/* Decorative Heritage Background Ornaments */}
      <svg
        className="absolute -top-16 -right-16 w-72 h-72 text-white opacity-5 pointer-events-none"
        fill="currentColor"
        viewBox="0 0 100 100"
      >
        <path d="M50 0 L100 50 L50 100 L0 50 Z"></path>
        <circle cx="50" cy="50" fill="none" r="32" stroke="currentColor" strokeWidth="3"></circle>
        <circle cx="50" cy="50" fill="none" r="18" stroke="currentColor" strokeWidth="2"></circle>
      </svg>
      <svg
        className="absolute -bottom-20 -left-20 w-80 h-80 text-[#D97724] opacity-10 pointer-events-none"
        fill="currentColor"
        viewBox="0 0 100 100"
      >
        <path d="M50 5 L95 50 L50 95 L5 50 Z"></path>
        <path
          d="M50 20 L80 50 L50 80 L20 50 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        ></path>
      </svg>

      {/* Top Flow Step Indicator */}
      <div className="relative z-10 flex flex-col items-center gap-2 pt-2">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
          <span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-ping"></span>
          <span className="font-label-sm text-[11px] text-tertiary-fixed tracking-wider uppercase font-bold">
            Alur Aplikasi: Splashscreen → Login → Beranda
          </span>
        </div>
      </div>

      {/* Center Brand Identity & Emblem */}
      <div className="relative z-10 flex flex-col items-center text-center my-auto py-8">
        <div className="relative mb-6">
          <div className="absolute -inset-4 rounded-[36px] bg-tertiary-fixed/20 blur-xl animate-pulse"></div>
          <div className="w-28 h-28 rounded-[28px] bg-surface-container-lowest p-4 shadow-2xl flex items-center justify-center relative border-2 border-tertiary-fixed/50">
            <SafeImage
              src={LOKAMART_LOGO_URL}
              alt="LokaMart Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 w-9 h-9 rounded-full bg-[#D97724] text-white flex items-center justify-center shadow-lg border-2 border-[#041B3C]">
            <span
              className="material-symbols-outlined text-[18px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              verified
            </span>
          </div>
        </div>

        <span className="font-label-sm text-xs uppercase tracking-[0.22em] text-tertiary-fixed font-bold">
          E-Commerce Kriya Nusantara
        </span>
        <h1 className="font-headline-lg text-[32px] font-extrabold text-white tracking-tight mt-1">
          LokaMart
        </h1>
        <p className="font-body-md text-body-md text-white/80 max-w-[290px] mt-2 leading-relaxed">
          Pasar Digital Kerajinan Tangan, Batik Trusmi, Anyaman Rotan &amp; Kuliner Khas UMKM
          Cirebon
        </p>

        {/* Academic Attribution Card */}
        <div className="mt-6 px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 max-w-[320px] flex items-center gap-3 text-left">
          <div className="w-10 h-10 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[22px]">school</span>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-label-sm text-[10px] text-tertiary-fixed uppercase tracking-wider font-bold">
              Karya Akademik Mahasiswa
            </span>
            <span className="font-title-sm text-title-sm text-white font-bold leading-snug">
              RPL (Rekayasa Perangkat Lunak)
            </span>
            <span className="font-body-sm text-[11px] text-white/85 font-semibold">
              STMIK IKMI CIREBON
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Progress Bar & Action */}
      <div className="relative z-10 flex flex-col gap-3 w-full max-w-md mx-auto">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between text-xs text-white/80 font-label-sm">
            <span>Memuat katalog kriya &amp; autentikasi...</span>
            <span className="font-bold text-tertiary-fixed">{Math.min(100, progress)}%</span>
          </div>
          <div className="w-full h-2 rounded-full bg-white/15 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-tertiary-fixed to-[#D97724] transition-all duration-150"
              style={{ width: `${Math.min(100, progress)}%` }}
            ></div>
          </div>
        </div>

        <button
          type="button"
          onClick={onFinishSplash}
          className="mt-2 w-full h-12 rounded-xl bg-surface-container-lowest text-primary font-label-lg text-label-lg font-bold shadow-lg flex items-center justify-center gap-2 active:scale-[0.99] transition-transform"
        >
          <span>Lanjut ke Halaman Login</span>
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>

        <button
          type="button"
          onClick={() => onNavigate('register')}
          className="w-full py-1.5 text-center font-label-sm text-xs text-white/75 hover:text-white underline"
        >
          Belum punya akun? Daftar Akun Baru
        </button>
      </div>
    </div>
  );
};

interface LoginScreenProps {
  registeredAccounts: RegisteredAccount[];
  justRegisteredAccount?: RegisteredAccount | null;
  onLoginSuccess: (user: UserProfile) => void;
  onNavigate: (screen: ScreenId) => void;
  onShowToast: (msg: string) => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({
  registeredAccounts,
  justRegisteredAccount,
  onLoginSuccess,
  onNavigate,
  onShowToast,
}) => {
  const [emailOrPhone, setEmailOrPhone] = useState(
    justRegisteredAccount?.email || 'fajar.pratama@mhs.ikmi.ac.id'
  );
  const [password, setPassword] = useState(
    justRegisteredAccount?.password || 'password123'
  );
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [resetEmail, setResetEmail] = useState('fajar.pratama@mhs.ikmi.ac.id');

  useEffect(() => {
    if (justRegisteredAccount) {
      setEmailOrPhone(justRegisteredAccount.email);
      setPassword(justRegisteredAccount.password);
    }
  }, [justRegisteredAccount]);

  const handleSubmitLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const identifier = emailOrPhone.trim().toLowerCase();
    if (!identifier) {
      const msg = 'Silakan masukkan Email, Username, NIM, atau Nomor HP Anda.';
      setErrorMsg(msg);
      onShowToast(msg);
      return;
    }
    if (!password) {
      const msg = 'Silakan masukkan kata sandi (password) Anda.';
      setErrorMsg(msg);
      onShowToast(msg);
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);

      const cleanDigits = identifier.replace(/\D/g, '');
      const matched = registeredAccounts.find(
        (acc) =>
          acc.email.trim().toLowerCase() === identifier ||
          acc.name.trim().toLowerCase() === identifier ||
          (acc.nim && acc.nim.trim().toLowerCase() === identifier) ||
          (cleanDigits.length >= 8 && acc.phone.replace(/\D/g, '') === cleanDigits)
      );

      // 1. Check if username / email exists in the registered accounts database
      if (!matched) {
        const notFoundMsg =
          'Login Gagal: Username / Email tidak ditemukan di database! Pastikan akun sudah terdaftar di menu Daftar (Register).';
        setErrorMsg(notFoundMsg);
        onShowToast('Login ditolak: Akun tidak ditemukan di database!');
        return;
      }

      // 2. Strictly check if password matches the account's password in the database
      if (matched.password !== password) {
        const wrongPassMsg =
          'Login Gagal: Kata sandi (Password) salah! Password tidak sesuai dengan data akun di database.';
        setErrorMsg(wrongPassMsg);
        onShowToast('Login ditolak: Password salah!');
        return;
      }

      // 3. Both username/email and password match the database -> Allow login to Beranda
      onLoginSuccess({
        name: matched.name,
        email: matched.email,
        phone: matched.phone,
        prodi: matched.prodi || 'Rekayasa Perangkat Lunak (RPL)',
        program: matched.program || matched.prodi || 'Rekayasa Perangkat Lunak (RPL)',
        campus: matched.campus || 'STMIK IKMI CIREBON',
        nim: matched.nim || '41220089',
        studentId: matched.studentId || matched.nim || '41220089',
        memberLevel: matched.memberLevel || 'Member Perak',
        memberTier: matched.memberTier || 'Member Perak • Sejak 2026',
        avatarUrl: matched.avatarUrl || DEFAULT_AVATAR_URL,
      });
    }, 300);
  };

  const handleQuickAccountSelect = (acc: RegisteredAccount) => {
    setEmailOrPhone(acc.email);
    setPassword(acc.password);
    setErrorMsg(null);
    onShowToast(`Data akun ${acc.name} diisi ke form. Klik "Masuk ke Beranda" untuk login.`);
  };

  return (
    <div className="flex flex-col w-full min-h-full pb-8 bg-surface">
      {/* Top Hero Banner with Batik Ornament */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-container to-secondary px-margin pt-5 pb-8 text-on-primary shadow-md">
        <svg
          className="absolute -right-8 -bottom-8 w-48 h-48 text-on-primary opacity-10 pointer-events-none"
          fill="currentColor"
          viewBox="0 0 100 100"
        >
          <path d="M50 0 L100 50 L50 100 L0 50 Z"></path>
          <circle cx="50" cy="50" fill="none" r="28" stroke="currentColor" strokeWidth="4"></circle>
          <path
            d="M50 15 L85 50 L50 85 L15 50 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          ></path>
        </svg>

        <div className="relative z-10 flex flex-col items-center text-center gap-1.5">
          {/* Flow Breadcrumb Pill */}
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-surface-container-lowest/15 backdrop-blur-xs text-tertiary-fixed font-label-sm text-[10px] tracking-wider uppercase mb-1">
            <span
              onClick={() => onNavigate('splash')}
              className="opacity-75 hover:opacity-100 cursor-pointer underline"
            >
              1. Splashscreen
            </span>
            <span>→</span>
            <span className="font-bold text-white bg-white/20 px-1.5 py-0.2 rounded">
              2. Login
            </span>
            <span>→</span>
            <span className="opacity-75">3. Beranda</span>
          </div>

          <div className="w-15 h-15 rounded-2xl bg-surface-container-lowest p-2.5 shadow-lg flex items-center justify-center">
            <SafeImage
              src={LOKAMART_LOGO_URL}
              alt="LokaMart Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="font-headline-sm text-headline-sm text-on-primary tracking-tight mt-1">
            Login LokaMart Nusantara
          </h1>
          <p className="font-body-sm text-body-sm text-surface-container/90 max-w-xs">
            Silakan masuk terlebih dahulu untuk mengakses Beranda &amp; Katalog Kriya UMKM.
          </p>
        </div>
      </div>

      {/* Auth Mode Switcher Pill */}
      <div className="px-margin @md:px-8 -mt-5 relative z-20 max-w-5xl mx-auto w-full">
        <div className="bg-surface-container-lowest p-1.5 rounded-2xl shadow-md grid grid-cols-2 gap-1.5 max-w-md mx-auto @lg:mx-0">
          <button
            type="button"
            className="py-2.5 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg font-bold shadow-xs flex items-center justify-center gap-1.5 transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">login</span>
            <span>Masuk (Login)</span>
          </button>
          <button
            type="button"
            onClick={() => onNavigate('register')}
            className="py-2.5 rounded-xl bg-transparent text-on-surface-variant hover:bg-surface-container-low font-label-lg text-label-lg flex items-center justify-center gap-1.5 transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">person_add</span>
            <span>Daftar (Register)</span>
          </button>
        </div>
      </div>

      {/* Main Login Form & Database Grid (1 Col on Android, 2 Cols on Komputer) */}
      <div className="px-margin @md:px-8 mt-space-md max-w-5xl mx-auto w-full flex flex-col @lg:grid @lg:grid-cols-12 gap-space-md @lg:gap-6 @lg:items-start">
        <div className="@lg:col-span-7 flex flex-col gap-space-md">
          {/* Banner when redirected from Register */}
          {justRegisteredAccount && (
            <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-950 flex items-start gap-2.5 shadow-xs">
              <span
                className="material-symbols-outlined text-emerald-700 text-[22px] shrink-0 mt-0.5"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>
              <div className="flex flex-col gap-0.5">
                <span className="font-title-sm text-title-sm font-bold text-emerald-900">
                  Pendaftaran Berhasil! Silakan Login
                </span>
                <span className="font-body-sm text-xs text-emerald-800">
                  Akun <strong>{justRegisteredAccount.name}</strong> ({justRegisteredAccount.email})
                  telah terdaftar. Klik tombol <strong>Masuk ke Beranda</strong> di bawah untuk
                  melanjutkan.
                </span>
              </div>
            </div>
          )}

          <form
            onSubmit={handleSubmitLogin}
            className="bg-surface-container-lowest rounded-2xl p-space-lg @md:p-6 shadow-sm flex flex-col gap-space-md"
          >
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-0.5">
              <h2 className="font-title-lg text-title-lg text-primary">Masuk ke Akun Anda</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Beranda hanya dapat diakses setelah Anda berhasil login.
              </p>
            </div>
            <span className="material-symbols-outlined text-secondary text-[24px]">
              lock_open
            </span>
          </div>

          {errorMsg && (
            <div className="p-3 rounded-xl bg-error-container text-on-error-container font-body-sm text-body-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] shrink-0">error</span>
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Email / No HP Input */}
          <div className="flex flex-col gap-1.5">
            <label className="font-label-md text-label-md text-on-surface flex items-center justify-between">
              <span>Email / NIM / Nomor WhatsApp</span>
              <span className="font-label-sm text-[10px] text-secondary">Wajib diisi</span>
            </label>
            <div className="flex items-center gap-2 bg-surface-container-low rounded-xl px-3.5 py-2.5 focus-within:ring-2 focus-within:ring-primary/30 transition-all">
              <span className="material-symbols-outlined text-secondary text-[20px]">mail</span>
              <input
                type="text"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                placeholder="nama@mhs.ikmi.ac.id atau NIM"
                className="w-full bg-transparent font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none"
              />
              {emailOrPhone && (
                <button
                  type="button"
                  onClick={() => setEmailOrPhone('')}
                  className="text-outline hover:text-on-surface"
                >
                  <span className="material-symbols-outlined text-[18px]">cancel</span>
                </button>
              )}
            </div>
          </div>

          {/* Password Input */}
          <div className="flex flex-col gap-1.5">
            <label className="font-label-md text-label-md text-on-surface">Kata Sandi</label>
            <div className="flex items-center gap-2 bg-surface-container-low rounded-xl px-3.5 py-2.5 focus-within:ring-2 focus-within:ring-primary/30 transition-all">
              <span className="material-symbols-outlined text-secondary text-[20px]">lock</span>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan kata sandi"
                className="w-full bg-transparent font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="text-outline hover:text-primary flex items-center"
              >
                <span className="material-symbols-outlined text-[20px]">
                  {showPassword ? 'visibility_off' : 'visibility'}
                </span>
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between pt-0.5">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="peer sr-only"
              />
              <div className="w-5 h-5 rounded bg-surface-container peer-checked:bg-primary flex items-center justify-center transition-colors">
                <span
                  className={`material-symbols-outlined text-on-primary text-[15px] ${
                    rememberMe ? 'scale-100' : 'scale-0'
                  }`}
                >
                  check
                </span>
              </div>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Ingat sesi saya
              </span>
            </label>

            <button
              type="button"
              onClick={() => setShowForgotModal(true)}
              className="font-label-md text-label-md text-secondary hover:text-primary"
            >
              Lupa Kata Sandi?
            </button>
          </div>

          {/* Submit Login Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="mt-1 w-full h-12 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg font-bold shadow-md flex items-center justify-center gap-2 active:scale-[0.99] transition-all"
          >
            <span
              className={`material-symbols-outlined text-[20px] ${
                isLoading ? 'animate-spin' : ''
              }`}
            >
              {isLoading ? 'progress_activity' : 'login'}
            </span>
            <span>{isLoading ? 'Memverifikasi Login...' : 'Masuk ke Beranda LokaMart'}</span>
          </button>
        </form>
        </div>

        {/* Right Column on Desktop: Database Registered Accounts Section */}
        <div className="@lg:col-span-5 flex flex-col gap-space-md">
        <div className="bg-surface-container-lowest rounded-2xl p-space-md @md:p-5 shadow-sm flex flex-col gap-space-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-secondary text-[18px]">
                database
              </span>
              <span className="font-title-sm text-title-sm text-on-surface">
                Database Akun Terdaftar
              </span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-[10px] font-bold">
              {registeredAccounts.length} Akun di DB
            </span>
          </div>
          <p className="font-body-sm text-[11px] text-on-surface-variant -mt-1">
            Hanya akun yang terdaftar di database ini (dengan email/username &amp; password yang
            cocok) yang dapat masuk ke Beranda.
          </p>

          <div className="flex flex-col gap-2">
            {registeredAccounts.map((acc) => {
              const isSelected = emailOrPhone.trim().toLowerCase() === acc.email.toLowerCase();
              return (
                <div
                  key={acc.email}
                  onClick={() => handleQuickAccountSelect(acc)}
                  className={`p-3 rounded-xl flex items-center justify-between gap-2 cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-primary/8 ring-1 ring-primary'
                      : 'bg-surface-container-low hover:bg-surface-container'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center font-title-sm text-title-sm font-bold shrink-0">
                      {(acc.name || 'U').charAt(0).toUpperCase()}
                    </div>
                    <div className="flex flex-col min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="font-title-sm text-title-sm text-on-surface truncate">
                          {acc.name}
                        </span>
                        <span className="px-1.5 py-0.2 rounded bg-secondary-container text-on-secondary-container font-label-sm text-[9px] font-bold shrink-0">
                          {acc.campus}
                        </span>
                      </div>
                      <span className="font-body-sm text-[11px] text-on-surface-variant truncate">
                        Email: {acc.email}
                      </span>
                      <span className="font-label-sm text-[10px] text-secondary truncate">
                        Password DB: <code className="font-mono font-bold">{acc.password}</code>
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleQuickAccountSelect(acc);
                    }}
                    className="shrink-0 px-2.5 py-1.5 rounded-lg bg-surface-container text-primary font-label-sm text-[11px] font-bold shadow-xs active:scale-95"
                  >
                    Isi ke Form
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Switch to Register or Replay Splash */}
        <div className="text-center py-2 flex flex-col items-center gap-1.5">
          <p className="font-body-md text-body-md text-on-surface-variant">
            Belum memiliki akun LokaMart?{' '}
            <button
              type="button"
              onClick={() => onNavigate('register')}
              className="font-title-sm text-title-sm text-primary font-bold underline ml-1"
            >
              Daftar Akun Baru
            </button>
          </p>
          <button
            type="button"
            onClick={() => onNavigate('splash')}
            className="inline-flex items-center gap-1 text-xs text-secondary hover:underline font-label-sm"
          >
            <span className="material-symbols-outlined text-[14px]">Auto_awesome_motion</span>
            <span>Lihat Ulang Splashscreen</span>
          </button>
          <span className="font-label-sm text-[11px] text-outline mt-0.5">
            Mahasiswa RPL (Rekayasa Perangkat Lunak) • STMIK IKMI CIREBON
          </span>
        </div>
        </div>
      </div>

      {/* Modal Lupa Kata Sandi */}
      {showForgotModal && (
        <div className="fixed inset-0 z-50 bg-inverse-surface/60 backdrop-blur-sm flex items-end @md:items-center justify-center pb-safe p-0 @md:p-4">
          <div className="w-full max-w-[412px] bg-surface-container-lowest rounded-t-2xl @md:rounded-2xl p-space-xl flex flex-col gap-space-md shadow-2xl">
            <div className="flex items-center justify-between">
              <h3 className="font-title-lg text-title-lg text-primary">Reset Kata Sandi</h3>
              <button
                type="button"
                onClick={() => setShowForgotModal(false)}
                className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Masukkan email terdaftar Anda untuk menerima tautan pemulihan kata sandi LokaMart.
            </p>
            <input
              type="email"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
              className="h-11 px-3.5 rounded-xl bg-surface-container-low text-on-surface font-body-md focus:outline-none"
              placeholder="nama@mhs.ikmi.ac.id"
            />
            <button
              type="button"
              onClick={() => {
                setShowForgotModal(false);
                onShowToast(`Tautan pemulihan dikirim ke ${resetEmail || 'email Anda'}`);
              }}
              className="w-full h-11 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg font-bold shadow-md"
            >
              Kirim Tautan Pemulihan
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

interface RegisterScreenProps {
  registeredAccounts?: RegisteredAccount[];
  onRegisterSuccess: (newAccount: RegisteredAccount) => void;
  onNavigate: (screen: ScreenId) => void;
  onShowToast: (msg: string) => void;
}

export const RegisterScreen: React.FC<RegisterScreenProps> = ({
  registeredAccounts = [],
  onRegisterSuccess,
  onNavigate,
  onShowToast,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [nim, setNim] = useState('');
  const [prodi, setProdi] = useState('Rekayasa Perangkat Lunak (RPL)');
  const [campus, setCampus] = useState('STMIK IKMI CIREBON');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFillSampleStudent = () => {
    setName('Claudia Gilbran');
    setEmail('claudia.rpl@mhs.ikmi.ac.id');
    setPhone('0857-2410-8899');
    setNim('41220105');
    setProdi('Rekayasa Perangkat Lunak (RPL)');
    setCampus('STMIK IKMI CIREBON');
    setPassword('ikmicirebon123');
    setConfirmPassword('ikmicirebon123');
    setErrorMsg(null);
    onShowToast('Data contoh Mahasiswa RPL STMIK IKMI Cirebon terisi!');
  };

  const isPasswordMismatch =
    confirmPassword.length > 0 && password !== confirmPassword;
  const isPasswordMatch =
    confirmPassword.length > 0 && password.length >= 6 && password === confirmPassword;

  const handleSubmitRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!name.trim()) {
      const msg = 'Nama lengkap wajib diisi.';
      setErrorMsg(msg);
      onShowToast(msg);
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      const msg = 'Masukkan alamat email yang valid.';
      setErrorMsg(msg);
      onShowToast(msg);
      return;
    }
    const emailExists = registeredAccounts.some(
      (acc) => acc.email.toLowerCase() === email.trim().toLowerCase()
    );
    if (emailExists) {
      const msg = 'Email ini sudah terdaftar di database. Silakan langsung masuk di halaman Login.';
      setErrorMsg(msg);
      onShowToast(msg);
      return;
    }
    if (!phone.trim()) {
      const msg = 'Nomor WhatsApp / HP wajib diisi.';
      setErrorMsg(msg);
      onShowToast(msg);
      return;
    }
    if (password.length < 6) {
      const msg = 'Kata sandi minimal 6 karakter.';
      setErrorMsg(msg);
      onShowToast(msg);
      return;
    }
    if (!confirmPassword) {
      const msg = 'Konfirmasi kata sandi wajib diisi.';
      setErrorMsg(msg);
      onShowToast(msg);
      return;
    }
    if (password !== confirmPassword) {
      const msg =
        'Registrasi Gagal: Password dan Konfirmasi Password tidak sama! Harap pastikan kedua kata sandi sama persis.';
      setErrorMsg(msg);
      onShowToast('Registrasi ditolak: Password & Konfirmasi Password tidak sama!');
      return;
    }
    if (!agreeTerms) {
      const msg = 'Harap setujui Syarat & Ketentuan LokaMart.';
      setErrorMsg(msg);
      onShowToast(msg);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const studentNim = nim.trim() || '41220105';
      const studentProdi = prodi.trim() || 'Rekayasa Perangkat Lunak (RPL)';
      onRegisterSuccess({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        prodi: studentProdi,
        program: studentProdi,
        campus: campus.trim() || 'STMIK IKMI CIREBON',
        nim: studentNim,
        studentId: studentNim,
        memberLevel: 'Member Perak',
        memberTier: 'Member Perak • Sejak 2026',
        avatarUrl: DEFAULT_AVATAR_URL,
        password,
      });
    }, 450);
  };

  return (
    <div className="flex flex-col w-full min-h-full pb-8 bg-surface">
      {/* Top Hero Banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-container to-secondary px-margin pt-5 pb-7 text-on-primary shadow-md">
        <div className="relative z-10 flex items-center gap-3">
          <div className="w-13 h-13 rounded-2xl bg-surface-container-lowest p-2 shadow-md flex items-center justify-center shrink-0">
            <SafeImage
              src={LOKAMART_LOGO_URL}
              alt="LokaMart Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-label-sm text-[10px] text-tertiary-fixed uppercase tracking-wider font-bold">
              Registrasi Akun Baru → Lanjut ke Login
            </span>
            <h1 className="font-headline-sm text-headline-sm text-on-primary leading-tight">
              Gabung Komunitas LokaMart
            </h1>
            <p className="font-body-sm text-[11px] text-surface-container/90">
              Mahasiswa RPL • STMIK IKMI CIREBON &amp; Pecinta Produk Lokal
            </p>
          </div>
        </div>
      </div>

      {/* Auth Mode Switcher Pill */}
      <div className="px-margin @md:px-8 -mt-4 relative z-20 max-w-5xl mx-auto w-full">
        <div className="bg-surface-container-lowest p-1.5 rounded-2xl shadow-md grid grid-cols-2 gap-1.5 max-w-md mx-auto @lg:mx-0">
          <button
            type="button"
            onClick={() => onNavigate('login')}
            className="py-2.5 rounded-xl bg-transparent text-on-surface-variant hover:bg-surface-container-low font-label-lg text-label-lg flex items-center justify-center gap-1.5 transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">login</span>
            <span>Masuk (Login)</span>
          </button>
          <button
            type="button"
            className="py-2.5 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg font-bold shadow-xs flex items-center justify-center gap-1.5 transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">person_add</span>
            <span>Daftar (Register)</span>
          </button>
        </div>
      </div>

      {/* Registration Form Card (Responsive 2-Col on Desktop) */}
      <div className="px-margin @md:px-8 mt-space-md max-w-5xl mx-auto w-full flex flex-col @lg:grid @lg:grid-cols-12 gap-space-md @lg:gap-6 @lg:items-start">
        <form
          onSubmit={handleSubmitRegister}
          className="@lg:col-span-7 bg-surface-container-lowest rounded-2xl p-space-lg @md:p-6 shadow-sm flex flex-col gap-space-sm"
        >
          <div className="flex items-center justify-between pb-1">
            <div>
              <h2 className="font-title-lg text-title-lg text-primary">Formulir Pendaftaran</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Setelah daftar, Anda akan diarahkan ke halaman Login.
              </p>
            </div>
            <button
              type="button"
              onClick={handleFillSampleStudent}
              className="shrink-0 px-2.5 py-1.5 rounded-lg bg-secondary-fixed text-on-secondary-fixed font-label-sm text-[10px] font-bold flex items-center gap-1 active:scale-95 transition-transform"
            >
              <span className="material-symbols-outlined text-[13px]">auto_fix_high</span>
              <span>Isi Contoh</span>
            </button>
          </div>

          {errorMsg && (
            <div className="p-3 rounded-xl bg-error-container text-on-error-container font-body-sm text-body-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] shrink-0">error</span>
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Nama Lengkap */}
          <div className="flex flex-col gap-1">
            <label className="font-label-md text-label-md text-on-surface">Nama Lengkap</label>
            <div className="flex items-center gap-2 bg-surface-container-low rounded-xl px-3.5 py-2.5">
              <span className="material-symbols-outlined text-secondary text-[19px]">badge</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Contoh: Fajar Pratama"
                className="w-full bg-transparent font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="font-label-md text-label-md text-on-surface">
              Email Kampus / Pribadi
            </label>
            <div className="flex items-center gap-2 bg-surface-container-low rounded-xl px-3.5 py-2.5">
              <span className="material-symbols-outlined text-secondary text-[19px]">
                alternate_email
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nama@mhs.ikmi.ac.id"
                className="w-full bg-transparent font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none"
              />
            </div>
          </div>

          {/* Nomor WhatsApp & NIM */}
          <div className="grid grid-cols-2 gap-2.5">
            <div className="flex flex-col gap-1">
              <label className="font-label-md text-label-md text-on-surface">No. WhatsApp</label>
              <div className="flex items-center gap-1.5 bg-surface-container-low rounded-xl px-3 py-2.5">
                <span className="material-symbols-outlined text-secondary text-[18px]">call</span>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="0812-3456-7890"
                  className="w-full bg-transparent font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-label-md text-label-md text-on-surface">NIM (Opsional)</label>
              <div className="flex items-center gap-1.5 bg-surface-container-low rounded-xl px-3 py-2.5">
                <span className="material-symbols-outlined text-secondary text-[18px]">id_card</span>
                <input
                  type="text"
                  value={nim}
                  onChange={(e) => setNim(e.target.value)}
                  placeholder="41220089"
                  className="w-full bg-transparent font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Program Studi & Kampus */}
          <div className="flex flex-col gap-1">
            <label className="font-label-md text-label-md text-on-surface">
              Program Studi &amp; Kampus
            </label>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center gap-1.5 bg-surface-container-low rounded-xl px-3 py-2">
                <span className="material-symbols-outlined text-secondary text-[18px]">code</span>
                <input
                  type="text"
                  value={prodi}
                  onChange={(e) => setProdi(e.target.value)}
                  className="w-full bg-transparent font-body-sm text-body-sm text-on-surface focus:outline-none"
                />
              </div>
              <div className="flex items-center gap-1.5 bg-surface-container-low rounded-xl px-3 py-2">
                <span className="material-symbols-outlined text-secondary text-[18px]">school</span>
                <input
                  type="text"
                  value={campus}
                  onChange={(e) => setCampus(e.target.value)}
                  className="w-full bg-transparent font-body-sm text-body-sm text-on-surface focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Password & Confirm Password */}
          <div className="flex flex-col gap-1.5">
            <div className="grid grid-cols-2 gap-2.5">
              <div className="flex flex-col gap-1">
                <label className="font-label-md text-label-md text-on-surface">Kata Sandi</label>
                <div className="flex items-center gap-1.5 bg-surface-container-low rounded-xl px-3 py-2.5">
                  <span className="material-symbols-outlined text-secondary text-[18px]">lock</span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (errorMsg) setErrorMsg(null);
                    }}
                    placeholder="Min. 6 karakter"
                    className="w-full bg-transparent font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-label-md text-label-md text-on-surface">
                  Konfirmasi Sandi
                </label>
                <div
                  className={`flex items-center gap-1.5 rounded-xl px-3 py-2.5 transition-all ${
                    isPasswordMismatch
                      ? 'bg-error-container/30 ring-2 ring-error'
                      : isPasswordMatch
                      ? 'bg-emerald-50 ring-2 ring-emerald-500'
                      : 'bg-surface-container-low'
                  }`}
                >
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                      if (errorMsg) setErrorMsg(null);
                    }}
                    placeholder="Ketik ulang sandi"
                    className="w-full bg-transparent font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="text-outline hover:text-primary"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      {showPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {isPasswordMismatch && (
              <div className="px-3 py-2 rounded-xl bg-error-container text-on-error-container font-label-sm text-xs flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] shrink-0">cancel</span>
                <span>
                  Password dan Konfirmasi Password tidak sama! Anda tidak dapat mendaftar sebelum
                  keduanya sama.
                </span>
              </div>
            )}

            {isPasswordMatch && (
              <div className="px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 font-label-sm text-xs flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] shrink-0">
                  check_circle
                </span>
                <span>Password dan Konfirmasi Password sudah sama.</span>
              </div>
            )}
          </div>

          {/* Terms Checkbox */}
          <label className="flex items-start gap-2.5 pt-1 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              className="peer sr-only"
            />
            <div className="w-5 h-5 mt-0.5 rounded bg-surface-container peer-checked:bg-primary flex items-center justify-center shrink-0 transition-colors">
              <span
                className={`material-symbols-outlined text-on-primary text-[15px] ${
                  agreeTerms ? 'scale-100' : 'scale-0'
                }`}
              >
                check
              </span>
            </div>
            <span className="font-body-sm text-[11px] text-on-surface-variant leading-snug">
              Saya menyetujui Syarat Layanan &amp; Kebijakan Privasi{' '}
              <strong className="text-on-surface">LokaMart Nusantara</strong> serta mendukung UMKM
              lokal.
            </span>
          </label>

          {/* Submit Register CTA */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 w-full h-12 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg font-bold shadow-md flex items-center justify-center gap-2 active:scale-[0.99] transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">how_to_reg</span>
            <span>{isSubmitting ? 'Menyimpan Akun...' : 'Daftar & Lanjut ke Login'}</span>
          </button>
        </form>

        {/* Right Info Column on Desktop */}
        <div className="@lg:col-span-5 flex flex-col gap-space-md">
          {/* Member Bonus Info Card */}
          <div className="bg-secondary-fixed/60 rounded-xl p-space-md @md:p-5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center text-secondary shrink-0 shadow-xs">
              <span className="material-symbols-outlined text-[20px]">redeem</span>
            </div>
            <div className="flex flex-col">
              <span className="font-title-sm text-title-sm text-on-secondary-fixed font-bold">
                Alur Pendaftaran Member Baru
              </span>
              <span className="font-body-sm text-[11px] text-on-secondary-fixed-variant">
                Setelah klik Daftar, Anda akan diarahkan ke layar Login untuk masuk ke Beranda.
              </span>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-2xl p-space-md @md:p-5 shadow-sm flex flex-col gap-2">
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined text-[20px] text-secondary">
                verified_user
              </span>
              <h3 className="font-title-sm text-title-sm font-bold">
                Syarat Validasi Registrasi &amp; Database
              </h3>
            </div>
            <ul className="font-body-sm text-body-sm text-on-surface-variant space-y-1.5 pl-4 list-disc">
              <li>
                <strong>Password &amp; Konfirmasi Password</strong> wajib sama persis (minimal 6
                karakter).
              </li>
              <li>
                Akun yang berhasil didaftarkan otomatis tersimpan ke <strong>Database Akun</strong>.
              </li>
              <li>
                Setelah registrasi selesai, sistem mengarahkan ke halaman <strong>Login</strong>{' '}
                (tidak langsung ke Beranda).
              </li>
            </ul>
          </div>

          {/* Switch to Login */}
          <div className="text-center py-1">
            <p className="font-body-md text-body-md text-on-surface-variant">
              Sudah punya akun?{' '}
              <button
                type="button"
                onClick={() => onNavigate('login')}
                className="font-title-sm text-title-sm text-primary font-bold underline ml-1"
              >
                Masuk di sini
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
