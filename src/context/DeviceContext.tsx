// MemberContext.tsx

import React, { createContext, useContext, useState } from 'react';

// Örnek bir üye bilgisi
interface Device {
  Language: string;
}

// Context'i oluşturun
interface DeviceContextType {
  device: Device | null;
  setDevice: (device: Device | null) => void;
}

const DeviceContext = createContext<DeviceContextType | undefined>(undefined);

// Context'i kullanmak için bir Hook oluşturun
export function useDeviceContext() {
  const context = useContext(DeviceContext);
  if (!context) {
    throw new Error('useMemberContext must be used within a MemberProvider');
  }
  return context;
}

// Context'i sağlayan bir bileşen oluşturun
export function DeviceProvider({ children }: { children: React.ReactNode }) {
  const [device, setDevice] = useState<Device | null>(null);
  return (
    <DeviceContext.Provider value={{ device, setDevice }}>
      {children}
    </DeviceContext.Provider>
  );
}
