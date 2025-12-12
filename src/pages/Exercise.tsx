import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

export default function Exercise() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const bookTitle = searchParams.get('title') || 'Учебник';
  const exerciseNum = searchParams.get('num') || '1';
  const bookId = searchParams.get('id') || '1';

  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-pink-50">
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-violet-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center shadow-lg">
                <Icon name="BookOpen" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
                ГДЗ.рф
              </h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Button variant="ghost" className="text-gray-700 hover:text-violet-600 font-medium" onClick={() => navigate('/')}>
                <Icon name="Home" size={18} className="mr-2" />
                Главная
              </Button>
              <Button variant="ghost" className="text-gray-700 hover:text-violet-600 font-medium">
                <Icon name="BookMarked" size={18} className="mr-2" />
                Решебники
              </Button>
              <Button variant="ghost" className="text-gray-700 hover:text-violet-600 font-medium">
                <Icon name="Library" size={18} className="mr-2" />
                Учебники
              </Button>
              <Button variant="ghost" className="text-gray-700 hover:text-violet-600 font-medium" onClick={() => navigate('/profile')}>
                <Icon name="User" size={18} className="mr-2" />
                Профиль
              </Button>
            </nav>
            <Button className="md:hidden" variant="ghost" size="icon">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="mb-8 animate-fade-in">
          <Button variant="ghost" onClick={() => navigate(-1)} className="mb-4 text-gray-600 hover:text-violet-600">
            <Icon name="ArrowLeft" size={20} className="mr-2" />
            Вернуться к списку
          </Button>

          <Card className="border-0 shadow-xl">
            <div className="h-2 bg-gradient-to-r from-violet-600 to-pink-600"></div>
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-gray-600 mb-2">{bookTitle}</p>
                  <h2 className="text-3xl md:text-4xl font-bold mb-3">Упражнение № {exerciseNum}</h2>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="border-violet-300 text-violet-600 hover:bg-violet-50">
                    <Icon name="Heart" size={20} />
                  </Button>
                  <Button variant="outline" size="icon" className="border-violet-300 text-violet-600 hover:bg-violet-50">
                    <Icon name="Share2" size={20} />
                  </Button>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-amber-100 text-amber-700 border-0">Средняя сложность</Badge>
                <Badge className="bg-green-100 text-green-700 border-0">
                  <Icon name="CheckCircle" size={14} className="mr-1" />
                  Проверено экспертом
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="task" className="animate-slide-up">
          <TabsList className="grid w-full grid-cols-3 h-14 mb-6">
            <TabsTrigger value="task" className="text-base">
              <Icon name="FileText" size={20} className="mr-2" />
              Условие
            </TabsTrigger>
            <TabsTrigger value="solution" className="text-base">
              <Icon name="BookOpen" size={20} className="mr-2" />
              Решение
            </TabsTrigger>
            <TabsTrigger value="video" className="text-base">
              <Icon name="Video" size={20} className="mr-2" />
              Видео
            </TabsTrigger>
          </TabsList>

          <TabsContent value="task" className="animate-fade-in">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Icon name="FileText" size={24} className="text-violet-600" />
                  Условие задачи
                </h3>
                <div className="prose max-w-none">
                  <p className="text-lg leading-relaxed text-gray-700 mb-6">
                    Решите уравнение и найдите все корни, принадлежащие промежутку [0; 2π]:
                  </p>
                  <div className="bg-violet-50 rounded-2xl p-6 mb-6 text-center">
                    <p className="text-2xl font-semibold text-violet-900">
                      2sin²x - 3sinx + 1 = 0
                    </p>
                  </div>
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl">
                    <div className="flex items-start gap-3">
                      <Icon name="Lightbulb" size={24} className="text-amber-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-amber-900 mb-1">Подсказка</p>
                        <p className="text-amber-800">
                          Это квадратное уравнение относительно sinx. Используйте замену переменной t = sinx.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="solution" className="animate-fade-in">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Icon name="BookOpen" size={24} className="text-violet-600" />
                  Подробное решение
                </h3>

                {!showAnswer ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-violet-100 to-pink-100 flex items-center justify-center">
                      <Icon name="Lock" size={40} className="text-violet-600" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">Решение скрыто</h4>
                    <p className="text-gray-600 mb-6 max-w-md mx-auto">
                      Сначала попробуйте решить задачу самостоятельно. Когда будете готовы, нажмите кнопку ниже.
                    </p>
                    <Button
                      className="bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-700 hover:to-pink-700 text-white shadow-lg"
                      size="lg"
                      onClick={() => setShowAnswer(true)}
                    >
                      <Icon name="Eye" size={20} className="mr-2" />
                      Показать решение
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl p-6">
                      <p className="font-semibold text-violet-900 mb-3 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-violet-600 text-white flex items-center justify-center text-sm">
                          1
                        </span>
                        Выполним замену переменной
                      </p>
                      <p className="text-gray-700 mb-2">Пусть t = sinx, тогда уравнение примет вид:</p>
                      <div className="bg-white rounded-xl p-4 text-center">
                        <p className="text-xl font-semibold">2t² - 3t + 1 = 0</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-6">
                      <p className="font-semibold text-pink-900 mb-3 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-pink-600 text-white flex items-center justify-center text-sm">
                          2
                        </span>
                        Решим квадратное уравнение
                      </p>
                      <p className="text-gray-700 mb-3">По теореме Виета или через дискриминант:</p>
                      <div className="bg-white rounded-xl p-4 space-y-2">
                        <p className="text-lg">t₁ = 1</p>
                        <p className="text-lg">t₂ = 1/2</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6">
                      <p className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">
                          3
                        </span>
                        Вернемся к исходной переменной
                      </p>
                      <div className="space-y-4">
                        <div className="bg-white rounded-xl p-4">
                          <p className="font-medium mb-2">При t₁ = 1:</p>
                          <p className="text-lg">sinx = 1</p>
                          <p className="text-lg">x = π/2 + 2πn, n ∈ Z</p>
                        </div>
                        <div className="bg-white rounded-xl p-4">
                          <p className="font-medium mb-2">При t₂ = 1/2:</p>
                          <p className="text-lg">sinx = 1/2</p>
                          <p className="text-lg">x = π/6 + 2πn или x = 5π/6 + 2πn, n ∈ Z</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6">
                      <p className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center text-sm">
                          4
                        </span>
                        Отберем корни на промежутке [0; 2π]
                      </p>
                      <div className="bg-white rounded-xl p-4">
                        <p className="text-xl font-bold text-green-900 mb-2">Ответ:</p>
                        <p className="text-lg">x₁ = π/6, x₂ = π/2, x₃ = 5π/6</p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="video" className="animate-fade-in">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Icon name="Video" size={24} className="text-violet-600" />
                  Видеоразбор задачи
                </h3>
                <div className="aspect-video bg-gradient-to-br from-violet-100 to-pink-100 rounded-2xl flex items-center justify-center mb-6">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center">
                      <Icon name="Play" size={40} className="text-violet-600 ml-1" />
                    </div>
                    <p className="text-violet-700 font-semibold">Видео загружается...</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-blue-50 rounded-xl p-4">
                  <Icon name="Info" size={24} className="text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-blue-900 mb-1">Совет по просмотру</p>
                    <p className="text-blue-800 text-sm">
                      Попробуйте сначала решить задачу самостоятельно, а затем сверьте свое решение с видео.
                      Так материал усвоится намного лучше!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-8 flex justify-between gap-4 animate-fade-in">
          <Button
            variant="outline"
            size="lg"
            className="flex-1 border-violet-300 text-violet-600 hover:bg-violet-50"
            onClick={() => navigate(`/exercise?id=${bookId}&num=${Math.max(1, Number(exerciseNum) - 1)}&title=${encodeURIComponent(bookTitle)}`)}
          >
            <Icon name="ChevronLeft" size={20} className="mr-2" />
            Предыдущее
          </Button>
          <Button
            size="lg"
            className="flex-1 bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-700 hover:to-pink-700 text-white"
            onClick={() => navigate(`/exercise?id=${bookId}&num=${Number(exerciseNum) + 1}&title=${encodeURIComponent(bookTitle)}`)}
          >
            Следующее
            <Icon name="ChevronRight" size={20} className="ml-2" />
          </Button>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center flex-shrink-0">
                  <Icon name="MessageCircle" size={24} className="text-violet-600" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Остались вопросы?</h4>
                  <p className="text-sm text-gray-600 mb-3">Задайте вопрос нашим экспертам</p>
                  <Button variant="outline" size="sm" className="border-violet-300 text-violet-600">
                    Задать вопрос
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center flex-shrink-0">
                  <Icon name="Flag" size={24} className="text-pink-600" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Нашли ошибку?</h4>
                  <p className="text-sm text-gray-600 mb-3">Сообщите нам, и мы исправим</p>
                  <Button variant="outline" size="sm" className="border-pink-300 text-pink-600">
                    Сообщить об ошибке
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
