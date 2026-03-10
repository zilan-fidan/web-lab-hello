import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';
import Alert from '../components/Alert';

export default function UIKit({ onBack }: { onBack?: () => void }) {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 p-8 space-y-12 transition-colors text-gray-900 dark:text-gray-100">

            <div className="flex justify-between items-center bg-gray-100 dark:bg-gray-900 p-4 rounded-lg shadow">
                <h1 className="text-4xl font-bold">UI Kit</h1>
                {onBack && (
                    <Button variant="secondary" onClick={onBack}>Geri Dön</Button>
                )}
            </div>

            {/* --- BUTTONS --- */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-800 pb-2">Buttons</h2>
                <div className="flex flex-wrap gap-3">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="danger">Danger</Button>
                    <Button variant="ghost">Ghost</Button>
                </div>
                <div className="flex flex-wrap items-end gap-3">
                    <Button size="sm">Small</Button>
                    <Button size="md">Medium</Button>
                    <Button size="lg">Large</Button>
                </div>
                <div className="flex flex-wrap gap-3">
                    <Button variant="primary" disabled>Disabled</Button>
                </div>
            </section>

            {/* --- INPUTS --- */}
            <section className="space-y-4 max-w-md">
                <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-800 pb-2">Inputs</h2>
                <Input id="ui-name" label="Normal Input" placeholder="Bir şey yazın..." />
                <Input id="ui-err" label="Hatalı Input" error="Bu alan zorunludur" value="Yanlış Veri" onChange={() => { }} />
                <Input id="ui-help" label="Help Text" type="email" helpText="E-posta adresinizi girin" />
                <Input id="ui-dis" label="Disabled Input" disabled value="Değiştirilemez" readOnly />
            </section>

            {/* --- CARDS --- */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-800 pb-2">Cards</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card variant="elevated" title="Elevated Card">
                        Gölge ile yükseltilmiş kart.
                    </Card>
                    <Card variant="outlined" title="Outlined Card">
                        Çerçeveli kart.
                    </Card>
                    <Card variant="filled" title="Filled Card">
                        Dolgulu arka plan.
                    </Card>
                </div>
            </section>

            {/* --- ALERTS --- */}
            <section className="space-y-4 max-w-xl">
                <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-800 pb-2">Alerts</h2>
                <Alert variant="info" title="Bilgi">
                    Bilgilendirme mesajı.
                </Alert>
                <Alert variant="success" title="Başarılı">
                    İşlem tamamlandı.
                </Alert>
                <Alert variant="warning" title="Uyarı">
                    Dikkat edilmesi gereken durum.
                </Alert>
                <Alert variant="error" title="Hata" dismissible onDismiss={() => console.log('Kapatıldı')}>
                    Bir hata oluştu.
                </Alert>
            </section>

        </div>
    );
}
