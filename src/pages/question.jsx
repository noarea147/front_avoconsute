import React from 'react'
export default function question() {
    return (
        <>
            <div id="breadcrumb">
                <div class="container">
                    <ul>
                        <li>استشارات قانونية</li>
                        <li>
                            <a href="/">الصفحة الرئيسية</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="bg_color_1">
					<div class="container margin_120_95">
						<div class="main_title">
							<h1>استشارات قانونية من أفضل محامين في تونس</h1>
							<p>اطرح سؤالك مجانًا على المحامي أو راجع قائمة الأسئلة وإجاباتها.</p>
						</div>
						<div class="container margin_120_95">
							<div class="row add_bottom_30">
								<div class="col-lg-8">
									<div class="box_feat2">
										<h3>إستشر محامٍ الأن
										</h3>
										<p>استشارة قانونية من عند أفضل المحامين في تونس مع خصوصية تامة وإجابة موثوقة
										</p><br></br>
										<p class="text-center">
											<a href="/استشارة-قانونية/" class="btn_1 medium">إطرح سؤالا الأن</a>
										</p>

									</div>
								</div>
								<div class="col-lg-4">
									<div class="box_feat2">
										<h3>
											أخر السؤالات
										</h3>
											<div class="mySlides">
												<a href="">title</a>
											</div>
									</div>
								</div>
							</div>
						</div>
						<div class="main_title">
							<h2>أسئلة و أجوبة</h2>
							<p>اطرح سؤالك مجانًا الآن و راجع قائمة الأسئلة وإجاباتها.</p>
						</div>

						<div class="row" id="renderQuestionReponse">
								<div class="col-md-4">
									<div class="about-review">
										<div class="rating">
											<h4>titre</h4>
										</div>

										<p>body</p>
									</div>
								</div>


						</div>
						<center>
							<p class="btn_1 medium" onclick="showMoreQr()">تحميل المزيد</p>
						</center>					</div>
				</div>
        </>
    )
}
